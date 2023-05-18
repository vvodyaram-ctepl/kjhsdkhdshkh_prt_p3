import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewImgScoreComponent } from './view-img-score.component';

describe('ViewImgScoreComponent', () => {
  let component: ViewImgScoreComponent;
  let fixture: ComponentFixture<ViewImgScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImgScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImgScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
