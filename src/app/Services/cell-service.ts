// cell.service.ts
import {inject, Injectable, signal} from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Cell} from '../Models/cell';
import { DUMMY_CELL } from './dummy-data';
import {HttpClient} from '@angular/common/http';
import { CellDto } from '../Models/dtos/cell-dto'
import {StateUpdate} from '../Models/dtos/state-update';
import {Observable} from 'rxjs';
import * as signalR from '@microsoft/signalr'

@Injectable({ providedIn: 'root' })
export class CellService {
  private readonly apiUrl = 'http://localhost:5175/api/cell';
  private readonly hubUrl = 'http://localhost:5175/hubs/cell';

  private hubConnection?: signalR.HubConnection;

  // The cell state — initialized with dummy data for now
  cell = signal<Cell>(DUMMY_CELL);
  private http = inject(HttpClient);
  // Connection state so components can show connected/disconnected UI
  isConnected = signal<boolean>(false);



  // private hubConnection: HubConnection;

  constructor() {
    this.loadCell();

    this.hubConnection?.onreconnecting(() => this.isConnected.set(false));
    this.hubConnection?.onreconnected(() => this.isConnected.set(true));
    this.hubConnection?.onclose(() => this.isConnected.set(false));

  }

  private loadCell() {
    this.http.get<CellDto>(this.apiUrl).subscribe({
      next: (dto) => {
        this.applyDto(dto);
        this.isConnected.set(true);
        this.startHub(); // start SignalR after initial state is loaded
      },
      error: () => {
        this.isConnected.set(false);
      }
    });
  }

  private startHub() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.hubUrl)
      .withAutomaticReconnect()
      .build();

    // subcribe to state changes on the ads
    this.hubConnection.on('StateUpdate', (update: StateUpdate) => {
      this.applyUpdate(update);
    });

    this.hubConnection
      .start()
      .catch(err => console.error('SignalR connection error:', err));
  }


  private applyDto(dto: CellDto) {
    const cell = this.cell();
    cell.emergencyStop.set(dto.emergencyStop);
    cell.operatorSafety.set(dto.operatorSafety);
    cell.leftSafetyCurtain.set(dto.leftSafetyCurtain);
    cell.rightSafetyCurtain.set(dto.rightSafetyCurtain);
    cell.doorSafety.set(dto.doorSafety);
    cell.state.set(dto.status);
    cell.activeProgramName.set(dto.activeProgram?.name);
  }

  // Match ads state updates from signalR to the respective values
  private readonly cellUpdateMap: Record<string, (value: any) => void> = {
    emergencyStop:     (v) => this.cell().emergencyStop.set(v),
    operatorSafety:    (v) => this.cell().operatorSafety.set(v),
    leftSafetyCurtain: (v) => this.cell().leftSafetyCurtain.set(v),
    rightSafetyCurtain:(v) => this.cell().rightSafetyCurtain.set(v),
    doorSafety:        (v) => this.cell().doorSafety.set(v),
    status:            (v) => this.cell().state.set(v),
  };

  // event handler on signalR ads state updates
  applyUpdate(update: StateUpdate) {
    const setter = this.cellUpdateMap[update.property];
    if (setter) setter(update.value);
  }

  // generic read by variable name on the ads
  read<T>(variableName: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/read/${variableName}`);
  }

  // generic write a variable by var name to the ads
  write(variableName: string, value: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/write`, { variableName, value });
  }

}
