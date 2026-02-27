import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyCurtain } from './safety-curtain';

describe('SafetyCurtain', () => {
  let component: SafetyCurtain;
  let fixture: ComponentFixture<SafetyCurtain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetyCurtain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyCurtain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
