import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuesStudyResponseListComponent } from './ques-study-response-list.component';

describe('QuesStudyResponseListComponent', () => {
  let component: QuesStudyResponseListComponent;
  let fixture: ComponentFixture<QuesStudyResponseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesStudyResponseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesStudyResponseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
