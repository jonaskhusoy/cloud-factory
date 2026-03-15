import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyorManualControlTab } from './conveyor-manual-control-tab';

describe('ConveyorManualControlTab', () => {
  let component: ConveyorManualControlTab;
  let fixture: ComponentFixture<ConveyorManualControlTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConveyorManualControlTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConveyorManualControlTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
