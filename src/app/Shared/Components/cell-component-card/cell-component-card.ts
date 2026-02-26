import {Component, computed, Input} from '@angular/core';
import {CellComponent, OperationalStatus} from '../../../Models/cell-components/cell-component-model';
import {NgClass} from '@angular/common';
import {DUMMY_CELL} from '../../../Models/robot';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cell-component-card',
  imports: [NgClass, RouterLink],
  templateUrl: './cell-component-card.html',
  styleUrl: './cell-component-card.css',
  host: {
    class: 'flex flex-1 h-full w-full'
  }
})
export class CellComponentCard {
  @Input() cell: CellComponent = DUMMY_CELL;

  // cell-card.component.ts - animation classes live here where the CSS is defined
  outlineClass = computed(() => {
    switch (this.cell.status()) {
      case OperationalStatus.Running: return 'outline outline-2 -outline-offset-2 outline-success-500 outline-pulse-active';
      case OperationalStatus.Faulted: return 'outline outline-2 -outline-offset-2 outline-error-600 outline-pulse-error';
      default:                        return 'dark:outline dark:outline-white/10';
    }
  });
}
