import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddImageScoreComponent } from './add-image-score.component';

describe('AddImageScoreComponent', () => {
  let component: AddImageScoreComponent;
  let fixture: ComponentFixture<AddImageScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImageScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
