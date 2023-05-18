import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPetQuesResponseComponent } from './view-pet-ques-response.component';

describe('ViewPetQuesResponseComponent', () => {
  let component: ViewPetQuesResponseComponent;
  let fixture: ComponentFixture<ViewPetQuesResponseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPetQuesResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPetQuesResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
