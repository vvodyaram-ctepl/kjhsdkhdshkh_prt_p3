import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetParentComponent } from './pet-parent.component';

describe('PetParentComponent', () => {
  let component: PetParentComponent;
  let fixture: ComponentFixture<PetParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
