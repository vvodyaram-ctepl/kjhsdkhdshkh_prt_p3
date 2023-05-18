import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientChartsComponent } from './patient-charts.component';

describe('PatientChartsComponent', () => {
  let component: PatientChartsComponent;
  let fixture: ComponentFixture<PatientChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
