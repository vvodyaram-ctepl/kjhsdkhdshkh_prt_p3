import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionnaireInstructionsComponent } from './questionnaire-instructions.component';

describe('QuestionnaireInstructionsComponent', () => {
  let component: QuestionnaireInstructionsComponent;
  let fixture: ComponentFixture<QuestionnaireInstructionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
