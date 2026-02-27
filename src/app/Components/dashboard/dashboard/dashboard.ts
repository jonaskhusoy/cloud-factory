import {Component, computed, inject} from '@angular/core';
import {CellComponentCard} from '../../../Shared/Components/cell-component-card/cell-component-card';
import {CellService} from '../../../Services/cell-service';
import {OperationalStatus} from '../../../Models/cell-components/cell-component-model';
import {NgClass} from '@angular/common';
import {SafetyCurtainComponent} from '../../../Shared/Components/safety-curtain/safety-curtain';

@Component({
  selector: 'app-dashboard',
  imports: [CellComponentCard, NgClass, SafetyCurtainComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  host: {
    class: 'flex flex-1 h-full w-full'
  }
})
export class Dashboard {
  cellService = inject(CellService)
  cell = this.cellService.cell;

  outlineClass = computed(() => {
    const base = 'px-4 py-4';
    if (!this.cell().emergencyStop()) {
      return `${base} outline outline-2 -outline-offset-2 outline-error-600 outline-pulse-error rounded-md`;
    }
    return base;
  });

}
