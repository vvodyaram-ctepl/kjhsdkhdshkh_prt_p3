import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSupportMaterialComponent } from './edit-support-material.component';

describe('EditSupportMaterialComponent', () => {
  let component: EditSupportMaterialComponent;
  let fixture: ComponentFixture<EditSupportMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupportMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupportMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
