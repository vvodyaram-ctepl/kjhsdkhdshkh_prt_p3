import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPetQuestionnaireComponent } from './view-pet-questionnaire.component';

describe('ViewPetQuestionnaireComponent', () => {
  let component: ViewPetQuestionnaireComponent;
  let fixture: ComponentFixture<ViewPetQuestionnaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPetQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPetQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
