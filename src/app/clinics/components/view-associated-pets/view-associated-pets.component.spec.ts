import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAssociatedPetsComponent } from './view-associated-pets.component';

describe('ViewAssociatedPetsComponent', () => {
  let component: ViewAssociatedPetsComponent;
  let fixture: ComponentFixture<ViewAssociatedPetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssociatedPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociatedPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
