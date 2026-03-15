import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotManualControlTab } from './robot-manual-control-tab';

describe('RobotManualControlTab', () => {
  let component: RobotManualControlTab;
  let fixture: ComponentFixture<RobotManualControlTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotManualControlTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotManualControlTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
