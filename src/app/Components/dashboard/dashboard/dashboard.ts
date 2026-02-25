import { Component } from '@angular/core';
import {CellComponentCard} from '../../../Shared/Components/cell-component-card/cell-component-card';

@Component({
  selector: 'app-dashboard',
  imports: [CellComponentCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  host: {
    class: 'flex flex-1 h-full w-full'
  }
})
export class Dashboard {

}
