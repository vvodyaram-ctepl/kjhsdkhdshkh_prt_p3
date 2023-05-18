import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiSetComponent } from './multi-set.component';

describe('MultiSetComponent', () => {
  let component: MultiSetComponent;
  let fixture: ComponentFixture<MultiSetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
