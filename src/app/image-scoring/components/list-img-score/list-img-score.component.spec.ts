import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListImgScoreComponent } from './list-img-score.component';

describe('ListImgScoreComponent', () => {
  let component: ListImgScoreComponent;
  let fixture: ComponentFixture<ListImgScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImgScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImgScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
