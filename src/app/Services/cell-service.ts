// cell.service.ts
import { Injectable, signal } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Cell} from '../Models/cell';
import { DUMMY_CELL } from './dummy-data';

@Injectable({ providedIn: 'root' })
export class CellService {

  // The cell state — initialized with dummy data for now
  cell = signal<Cell>(DUMMY_CELL);

  // Connection state so components can show connected/disconnected UI
  isConnected = signal<boolean>(false);

  // private hubConnection: HubConnection;

  // constructor() {
  //   // this.hubConnection = new HubConnectionBuilder()
  //   //   .withUrl('/hubs/cell')
  //   //   .withAutomaticReconnect()
  //   //   .build();
  //
  //   // this.registerHandlers();
  //   // this.startConnection();
  // }

  // private async startConnection(): Promise<void> {
  //   try {
  //     await this.hubConnection.start();
  //     this.isConnected.set(true);
  //     console.log('SignalR connected');
  //   } catch (err) {
  //     this.isConnected.set(false);
  //     console.error('SignalR connection failed:', err);
  //   }
  // }

  // private registerHandlers(): void {
  //   this.hubConnection.onreconnecting(() => this.isConnected.set(false));
  //   this.hubConnection.onreconnected(() => this.isConnected.set(true));
  //   this.hubConnection.onclose(() => this.isConnected.set(false));

    // this.hubConnection.on('CellStatus', (status: OperationalStatus) => {
    //   this.cell().operationalStatus.set(status);
    // });

    // this.hubConnection.on('EmergencyStop', (active: boolean) => {
    //   this.cell().emergencyStop.set(active);
    // });

    // this.hubConnection.on('ComponentStatus', (id: string, status: OperationalStatus) => {
    //   const component = this.cell().cellComponents.find(c => c.id === id);
    //   component?.status.set(status);
    // });
//   }
}
