import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewClinicUsersComponent } from './view-clinic-users.component';

describe('ViewClinicUsersComponent', () => {
  let component: ViewClinicUsersComponent;
  let fixture: ComponentFixture<ViewClinicUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClinicUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClinicUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
