import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstructionsViewComponent } from './instructions-view.component';

describe('InstructionsViewComponent', () => {
  let component: InstructionsViewComponent;
  let fixture: ComponentFixture<InstructionsViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
