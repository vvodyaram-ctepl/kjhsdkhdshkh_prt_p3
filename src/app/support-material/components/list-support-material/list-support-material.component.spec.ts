import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListSupportMaterialComponent } from './list-support-material.component';

describe('ListSupportMaterialComponent', () => {
  let component: ListSupportMaterialComponent;
  let fixture: ComponentFixture<ListSupportMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSupportMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSupportMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
