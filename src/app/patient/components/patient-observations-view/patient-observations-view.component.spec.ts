import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientObservationsViewComponent } from './patient-observations-view.component';

describe('PatientObservationsViewComponent', () => {
  let component: PatientObservationsViewComponent;
  let fixture: ComponentFixture<PatientObservationsViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientObservationsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientObservationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
