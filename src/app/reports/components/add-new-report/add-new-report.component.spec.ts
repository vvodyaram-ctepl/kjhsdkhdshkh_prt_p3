import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddNewReportComponent } from './add-new-report.component';

describe('AddNewReportComponent', () => {
  let component: AddNewReportComponent;
  let fixture: ComponentFixture<AddNewReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
