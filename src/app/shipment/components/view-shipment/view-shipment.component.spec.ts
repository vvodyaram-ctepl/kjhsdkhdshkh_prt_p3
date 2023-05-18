import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewShipmentComponent } from './view-shipment.component';

describe('ViewShipmentComponent', () => {
  let component: ViewShipmentComponent;
  let fixture: ComponentFixture<ViewShipmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
