import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudyAssociationComponent } from './study-association.component';

describe('StudyAssociationComponent', () => {
  let component: StudyAssociationComponent;
  let fixture: ComponentFixture<StudyAssociationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
