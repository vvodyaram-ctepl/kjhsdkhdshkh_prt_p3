import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClinicalNotificationsComponent } from './clinical-notifications.component';

describe('ClinicalNotificationsComponent', () => {
  let component: ClinicalNotificationsComponent;
  let fixture: ComponentFixture<ClinicalNotificationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
