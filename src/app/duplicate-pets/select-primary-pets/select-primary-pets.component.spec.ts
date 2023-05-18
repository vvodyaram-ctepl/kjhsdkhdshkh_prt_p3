import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectPrimaryPetsComponent } from './select-primary-pets.component';

describe('SelectPrimaryPetsComponent', () => {
  let component: SelectPrimaryPetsComponent;
  let fixture: ComponentFixture<SelectPrimaryPetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPrimaryPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPrimaryPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
