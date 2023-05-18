import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPushNotificationComponent } from './view-push-notification.component';

describe('ViewPushNotificationComponent', () => {
  let component: ViewPushNotificationComponent;
  let fixture: ComponentFixture<ViewPushNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPushNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPushNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
