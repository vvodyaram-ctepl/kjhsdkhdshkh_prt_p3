import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListQuestionnaireComponent } from './list-questionnaire.component';

describe('ListQuestionnaireComponent', () => {
  let component: ListQuestionnaireComponent;
  let fixture: ComponentFixture<ListQuestionnaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
