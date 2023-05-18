import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSubClinicsComponent } from './add-sub-clinics.component';

describe('AddSubClinicsComponent', () => {
  let component: AddSubClinicsComponent;
  let fixture: ComponentFixture<AddSubClinicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
