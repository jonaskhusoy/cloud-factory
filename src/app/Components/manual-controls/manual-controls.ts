import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RobotManualControlTab} from './manual-controls/robot-manual-control-tab/robot-manual-control-tab';
import { ConveyorManualControlTab} from './manual-controls/conveyor-manual-control-tab/conveyor-manual-control-tab';


type ComponentTab = 'Robot' | 'Conveyor 1' | 'Conveyor 2';

@Component({
  selector: 'app-manual-controls',
  standalone: true,
  imports: [CommonModule, RobotManualControlTab, ConveyorManualControlTab],
  templateUrl: 'manual-controls.html',
  host: { class: 'flex-1 flex flex-col h-full' }  // adds classes to <app-home> itself
})
export class ManualControlsComponent {
  selectedTab = signal<ComponentTab>('Robot');

  tabs: ComponentTab[] = ['Robot', 'Conveyor 1'];

  selectTab(tab: ComponentTab) {
    this.selectedTab.set(tab);
  }
}
