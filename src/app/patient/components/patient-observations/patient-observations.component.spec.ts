import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientObservationsComponent } from './patient-observations.component';

describe('PatientObservationsComponent', () => {
  let component: PatientObservationsComponent;
  let fixture: ComponentFixture<PatientObservationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
