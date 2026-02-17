import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import {Dashboard} from '../dashboard/dashboard/dashboard';
import {Log} from '../log/log/log';
import {Statistics} from '../statistics/statistics/statistics';
import {ManualControls} from '../manual-controls/manual-controls/manual-controls';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Dashboard, Log, Statistics, ManualControls],
  templateUrl: './home.component.html',
  host: { class: 'flex-1 flex flex-col h-full' }  // adds classes to <app-home> itself
})
export class Home {
  tabs = ['Cell', 'Manual', 'Statistics', 'Log', 'Configuration', 'I/O'];
  selectedTab = signal('Cell');

  selectTab(tab: string) {
    this.selectedTab.set(tab);
  }
}
