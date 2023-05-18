import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimaryPetsListComponent } from './primary-pets-list.component';

describe('PrimaryPetsListComponent', () => {
  let component: PrimaryPetsListComponent;
  let fixture: ComponentFixture<PrimaryPetsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
