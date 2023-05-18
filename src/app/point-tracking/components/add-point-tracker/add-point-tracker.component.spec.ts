import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPointTrackerComponent } from './add-point-tracker.component';

describe('AddPointTrackerComponent', () => {
  let component: AddPointTrackerComponent;
  let fixture: ComponentFixture<AddPointTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPointTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPointTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
