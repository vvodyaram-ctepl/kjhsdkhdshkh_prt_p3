import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListClinicUsersComponent } from './list-clinic-users.component';

describe('ListClinicUsersComponent', () => {
  let component: ListClinicUsersComponent;
  let fixture: ComponentFixture<ListClinicUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClinicUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClinicUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
