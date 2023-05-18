import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataStreamsComponent } from './data-streams.component';

describe('DataStreamsComponent', () => {
  let component: DataStreamsComponent;
  let fixture: ComponentFixture<DataStreamsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
