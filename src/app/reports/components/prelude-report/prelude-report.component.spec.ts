import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreludeReportComponent } from './prelude-report.component';

describe('PreludeReportComponent', () => {
  let component: PreludeReportComponent;
  let fixture: ComponentFixture<PreludeReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreludeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreludeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
