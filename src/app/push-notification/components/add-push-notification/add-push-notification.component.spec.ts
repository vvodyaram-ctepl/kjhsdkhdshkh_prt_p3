import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPushNotificationComponent } from './add-push-notification.component';

describe('AddPushNotificationComponent', () => {
  let component: AddPushNotificationComponent;
  let fixture: ComponentFixture<AddPushNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPushNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPushNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
