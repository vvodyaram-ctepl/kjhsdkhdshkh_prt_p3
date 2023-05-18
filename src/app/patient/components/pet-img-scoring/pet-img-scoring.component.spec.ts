import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetImgScoringComponent } from './pet-img-scoring.component';

describe('PetImgScoringComponent', () => {
  let component: PetImgScoringComponent;
  let fixture: ComponentFixture<PetImgScoringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetImgScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetImgScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
