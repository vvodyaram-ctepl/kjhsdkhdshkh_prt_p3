import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetDataExtractComponent } from './pet-data-extract.component';

describe('PetDataExtractComponent', () => {
  let component: PetDataExtractComponent;
  let fixture: ComponentFixture<PetDataExtractComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDataExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDataExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
