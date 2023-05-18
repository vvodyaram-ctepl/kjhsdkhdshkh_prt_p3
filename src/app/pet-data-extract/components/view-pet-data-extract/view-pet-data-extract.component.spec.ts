import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPetDataExtractComponent } from './view-pet-data-extract.component';

describe('ViewPetDataExtractComponent', () => {
  let component: ViewPetDataExtractComponent;
  let fixture: ComponentFixture<ViewPetDataExtractComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPetDataExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPetDataExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
