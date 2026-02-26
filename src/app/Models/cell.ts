import {computed, signal} from '@angular/core';
import {Robot} from './robot';
import {Conveyor} from './cell-components/conveyor';
export enum CellState {
  Idle,
  Active = 1,
  Error = 2,
  Pause = 3,
  Stopping = 4,
  Unknown = 5
}

export type AnyCellComponent = Robot | Conveyor;


export class Cell {
  id: string;
  name: string;

  // Safety statuses as signals
  emergencyStop = signal<boolean>(true);
  operatorSafety = signal<boolean>(false);
  lightCurtainStatus =  signal<boolean>(false);
  doorInterlockStatus =  signal<boolean>(false);

  status = signal<CellState>(CellState.Idle);
  activeProgramName = signal<string | undefined>(undefined);
  cycleTime = signal<number | undefined>(undefined);
  faultMessage = signal<string | undefined>(undefined);
  lastUpdated = signal<Date | undefined>(undefined);

  // Components don't need to be signals themselves since the
  // array won't change — the objects inside them will
  // configurationTables: ConfigurationTable[] = [];
  // plcs: Plc[] = [];
  // safetyControllers: SafetyController[] = [];
  cellComponents: AnyCellComponent[] = [];

  // Convenience getters if you ever need to filter by type
  get robots() { return this.cellComponents.filter(c => c instanceof Robot) as Robot[]; }
  get conveyors() { return this.cellComponents.filter(c => c instanceof Conveyor) as Conveyor[]; }

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
