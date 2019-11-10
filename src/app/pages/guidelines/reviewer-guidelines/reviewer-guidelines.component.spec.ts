import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerGuidelinesComponent } from './reviewer-guidelines.component';

describe('ReviewerGuidelinesComponent', () => {
  let component: ReviewerGuidelinesComponent;
  let fixture: ComponentFixture<ReviewerGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
