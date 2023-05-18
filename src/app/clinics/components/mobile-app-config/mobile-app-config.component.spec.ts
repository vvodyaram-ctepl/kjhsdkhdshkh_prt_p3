import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileAppConfigComponent } from './mobile-app-config.component';

describe('MobileAppConfigComponent', () => {
  let component: MobileAppConfigComponent;
  let fixture: ComponentFixture<MobileAppConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
