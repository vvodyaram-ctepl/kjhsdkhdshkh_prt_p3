import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PointTrackingComponent } from './point-tracking.component';

describe('PointTrackingComponent', () => {
  let component: PointTrackingComponent;
  let fixture: ComponentFixture<PointTrackingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
