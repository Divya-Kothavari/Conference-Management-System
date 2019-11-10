import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorGuidelinesComponent } from './author-guidelines.component';

describe('AuthorGuidelinesComponent', () => {
  let component: AuthorGuidelinesComponent;
  let fixture: ComponentFixture<AuthorGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
