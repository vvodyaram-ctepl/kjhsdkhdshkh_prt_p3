import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPetParentComponent } from './view-pet-parent.component';

describe('ViewPetParentComponent', () => {
  let component: ViewPetParentComponent;
  let fixture: ComponentFixture<ViewPetParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPetParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPetParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
