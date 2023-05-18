import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetStudyAssetComponent } from './pet-study-asset.component';

describe('PetStudyAssetComponent', () => {
  let component: PetStudyAssetComponent;
  let fixture: ComponentFixture<PetStudyAssetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetStudyAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetStudyAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
