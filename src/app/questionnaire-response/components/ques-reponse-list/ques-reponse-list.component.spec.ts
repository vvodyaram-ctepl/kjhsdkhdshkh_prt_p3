import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuesReponseListComponent } from './ques-reponse-list.component';

describe('QuesReponseListComponent', () => {
  let component: QuesReponseListComponent;
  let fixture: ComponentFixture<QuesReponseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesReponseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesReponseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
