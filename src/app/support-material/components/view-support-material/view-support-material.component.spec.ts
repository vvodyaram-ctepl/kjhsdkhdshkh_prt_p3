import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewSupportMaterialComponent } from './view-support-material.component';

describe('ViewSupportMaterialComponent', () => {
  let component: ViewSupportMaterialComponent;
  let fixture: ComponentFixture<ViewSupportMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupportMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
