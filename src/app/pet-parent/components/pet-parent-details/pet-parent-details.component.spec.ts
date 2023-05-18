import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetParentDetailsComponent } from './pet-parent-details.component';

describe('PetParentDetailsComponent', () => {
  let component: PetParentDetailsComponent;
  let fixture: ComponentFixture<PetParentDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetParentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetParentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
