import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCustomerSupportComponent } from './view-customer-support.component';

describe('ViewCustomerSupportComponent', () => {
  let component: ViewCustomerSupportComponent;
  let fixture: ComponentFixture<ViewCustomerSupportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
