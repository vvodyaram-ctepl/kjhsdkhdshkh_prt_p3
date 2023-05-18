import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeviceInformationComponent } from './device-information.component';

describe('DeviceInformationComponent', () => {
  let component: DeviceInformationComponent;
  let fixture: ComponentFixture<DeviceInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
