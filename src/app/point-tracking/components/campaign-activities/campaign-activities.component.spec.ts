import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CampaignActivitiesComponent } from './campaign-activities.component';

describe('CampaignActivitiesComponent', () => {
  let component: CampaignActivitiesComponent;
  let fixture: ComponentFixture<CampaignActivitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
