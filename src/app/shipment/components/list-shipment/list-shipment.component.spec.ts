import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListShipmentComponent } from './list-shipment.component';

describe('ListShipmentComponent', () => {
  let component: ListShipmentComponent;
  let fixture: ComponentFixture<ListShipmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
