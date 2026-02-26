// cell-component-detail.component.ts
import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CellService} from '../../Services/cell-service';


@Component({
  selector: 'app-cell-component-detail',
  templateUrl: 'cell-component-details.html',
})
export class CellComponentDetailComponent {
  private route = inject(ActivatedRoute);
  private cellService = inject(CellService);

  // Find the matching component from the cell by id
  component = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return this.cellService.cell().cellComponents.find(c => c.id === id);
  });
}
