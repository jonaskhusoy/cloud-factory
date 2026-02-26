import { Routes } from '@angular/router';
import {Home} from './Components/home/home.component';
import {CellComponentDetailComponent} from './Components/cell-component-details/cell-component-details';

export const routes: Routes = [
  { path: '', component: Home },
  {path: 'cell-components/:id', component: CellComponentDetailComponent}
];
