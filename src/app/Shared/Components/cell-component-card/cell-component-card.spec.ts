import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponentCard } from './cell-component-card';

describe('CellComponentCard', () => {
  let component: CellComponentCard;
  let fixture: ComponentFixture<CellComponentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellComponentCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellComponentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
