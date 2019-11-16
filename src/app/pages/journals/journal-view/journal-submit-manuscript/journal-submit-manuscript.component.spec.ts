import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalSubmitManuscriptComponent } from './journal-submit-manuscript.component';

describe('JournalSubmitManuscriptComponent', () => {
  let component: JournalSubmitManuscriptComponent;
  let fixture: ComponentFixture<JournalSubmitManuscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalSubmitManuscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalSubmitManuscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
