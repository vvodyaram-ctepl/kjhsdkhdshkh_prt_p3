import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatientNotesViewComponent } from './patient-notes-view.component';

describe('PatientNotesViewComponent', () => {
  let component: PatientNotesViewComponent;
  let fixture: ComponentFixture<PatientNotesViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNotesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
