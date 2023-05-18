import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddDuplicatePetsComponent } from './add-duplicate-pets.component';

describe('AddDuplicatePetsComponent', () => {
  let component: AddDuplicatePetsComponent;
  let fixture: ComponentFixture<AddDuplicatePetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDuplicatePetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDuplicatePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
