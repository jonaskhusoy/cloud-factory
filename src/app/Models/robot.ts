import {CellComponent, OperationalStatus} from './cell-components/cell-component-model';
import {signal} from '@angular/core';

export class Robot extends CellComponent{
  speed = signal<number>(0);
  isTeachMode = signal<boolean>(false);

  constructor(id: string, name: string) {
    super(id, name);
    this.status = signal<OperationalStatus>(OperationalStatus.Running);
  }
}



export const DUMMY_CELL: CellComponent = new Robot(
  '1',
  'Robot 1',
);
