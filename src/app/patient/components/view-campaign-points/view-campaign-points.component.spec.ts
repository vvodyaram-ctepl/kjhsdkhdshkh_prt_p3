import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCampaignPointsComponent } from './view-campaign-points.component';

describe('ViewCampaignPointsComponent', () => {
  let component: ViewCampaignPointsComponent;
  let fixture: ComponentFixture<ViewCampaignPointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCampaignPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampaignPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
