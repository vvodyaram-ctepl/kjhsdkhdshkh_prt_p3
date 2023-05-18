import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStudyQuestionnaireComponent } from './view-study-questionnaire.component';

describe('ViewStudyQuestionnaireComponent', () => {
  let component: ViewStudyQuestionnaireComponent;
  let fixture: ComponentFixture<ViewStudyQuestionnaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudyQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudyQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
