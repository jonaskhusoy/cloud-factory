import {signal, computed} from '@angular/core';
import {CellComponent, OperationalStatus} from './cell-component-model';

export class Conveyor extends CellComponent {
  speed = signal<number>(0);

  constructor(id: string, name: string) {
    super(id, name);
    this.status = signal<OperationalStatus>(OperationalStatus.Idle);
  }
}
