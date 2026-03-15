import {Component, inject} from '@angular/core';
import { ToggleComponent} from '../../../../Shared/Components/toggle-button/toggle-button';
import {CellService} from '../../../../Services/cell-service';

@Component({
  selector: 'app-robot-manual-control-tab',
  imports: [ToggleComponent],
  templateUrl: './robot-manual-control-tab.html',
  styleUrl: './robot-manual-control-tab.css',
})
export class RobotManualControlTab {

  cellService = inject(CellService)
  cell = this.cellService.cell;

  onButtonClick(): void {
    console.log('Button clicked');
  }

}
