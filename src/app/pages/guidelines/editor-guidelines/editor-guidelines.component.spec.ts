import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorGuidelinesComponent } from './editor-guidelines.component';

describe('EditorGuidelinesComponent', () => {
  let component: EditorGuidelinesComponent;
  let fixture: ComponentFixture<EditorGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
