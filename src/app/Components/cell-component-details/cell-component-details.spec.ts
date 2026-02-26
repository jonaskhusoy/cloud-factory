import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponentDetails } from './cell-component-details';

describe('CellComponentDetails', () => {
  let component: CellComponentDetails;
  let fixture: ComponentFixture<CellComponentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellComponentDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellComponentDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
