import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewDuplicatePetComponent } from './view-duplicate-pet.component';

describe('ViewDuplicatePetComponent', () => {
  let component: ViewDuplicatePetComponent;
  let fixture: ComponentFixture<ViewDuplicatePetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDuplicatePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDuplicatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
