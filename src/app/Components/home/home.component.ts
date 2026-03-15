import {Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common'
import {Dashboard} from '../dashboard/dashboard/dashboard';
import {Log} from '../log/log/log';
import {Statistics} from '../statistics/statistics/statistics';
import {ManualControlsComponent} from '../manual-controls/manual-controls';
import {CellService} from '../../Services/cell-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Dashboard, Log, Statistics, ManualControlsComponent],
  templateUrl: './home.component.html',
  host: { class: 'flex-1 flex flex-col h-full' }  // adds classes to <app-home> itself
})
export class Home {
  tabs = ['Cell', 'Manual', 'Statistics', 'Log', 'Configuration', 'I/O'];
  selectedTab = signal('Cell');
  cellService = inject(CellService)

  selectTab(tab: string) {
    this.selectedTab.set(tab);
  }
}
