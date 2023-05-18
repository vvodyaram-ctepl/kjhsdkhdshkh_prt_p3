import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStudyImageScoringComponent } from './view-study-image-scoring.component';

describe('ViewStudyImageScoringComponent', () => {
  let component: ViewStudyImageScoringComponent;
  let fixture: ComponentFixture<ViewStudyImageScoringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudyImageScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudyImageScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
