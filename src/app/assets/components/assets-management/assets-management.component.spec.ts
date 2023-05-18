import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssetsManagementComponent } from './assets-management.component';

describe('AssetsManagementComponent', () => {
  let component: AssetsManagementComponent;
  let fixture: ComponentFixture<AssetsManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
