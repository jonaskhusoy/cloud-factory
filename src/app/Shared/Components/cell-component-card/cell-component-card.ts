import { Component, Input } from '@angular/core';
import { CellComponent, CellState, DUMMY_CELL } from '../../../Models/cell-component-model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cell-component-card',
  imports: [NgClass],
  templateUrl: './cell-component-card.html',
  styleUrl: './cell-component-card.css',
  host: {
    class: 'flex flex-1 h-full w-full'
  }
})
export class CellComponentCard {
  @Input() cell: CellComponent = DUMMY_CELL;

  get outlineClass(): string {
    switch (this.cell.state) {
      case 'Active': return 'outline outline-2 -outline-offset-2 outline-success-500 outline-pulse-active';
      case 'Error':  return 'outline outline-2 -outline-offset-2 outline-error-600 outline-pulse-error';
      default:       return 'dark:outline dark:outline-white/10';
    }
  }

  get statusColor(): string {
    switch (this.cell.state) {
      case 'Active': return 'text-success-500';
      case 'Error':  return 'text-error-600';
      default:       return 'text-gray-400';
    }
  }
}
