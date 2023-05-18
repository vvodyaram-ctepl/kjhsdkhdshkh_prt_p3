import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewActivityFactorComponent } from './view-activity-factor.component';

describe('ViewActivityFactorComponent', () => {
  let component: ViewActivityFactorComponent;
  let fixture: ComponentFixture<ViewActivityFactorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivityFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivityFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
