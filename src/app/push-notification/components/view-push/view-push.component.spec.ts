import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPushComponent } from './view-push.component';

describe('ViewPushComponent', () => {
  let component: ViewPushComponent;
  let fixture: ComponentFixture<ViewPushComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
