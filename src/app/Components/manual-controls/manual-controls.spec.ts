import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualControls } from './manual-controls';

describe('ManualControls', () => {
  let component: ManualControls;
  let fixture: ComponentFixture<ManualControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
