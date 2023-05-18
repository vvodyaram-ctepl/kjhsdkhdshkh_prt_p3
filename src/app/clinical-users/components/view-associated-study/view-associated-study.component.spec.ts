import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAssociatedStudyComponent } from './view-associated-study.component';

describe('ViewAssociatedStudyComponent', () => {
  let component: ViewAssociatedStudyComponent;
  let fixture: ComponentFixture<ViewAssociatedStudyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssociatedStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociatedStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
