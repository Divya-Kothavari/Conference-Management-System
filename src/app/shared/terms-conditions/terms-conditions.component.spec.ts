import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TermsConditionsComponent } from './terms-conditions.component';
describe('TermsConditionsComponent', () => {
  let component: TermsConditionsComponent;
  let fixture: ComponentFixture<TermsConditionsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TermsConditionsComponent]
    });
    fixture = TestBed.createComponent(TermsConditionsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('isVisible defaults to: false', () => {
    expect(component.isVisible).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  describe('openTermsPopup', () => {
    it('makes expected calls', () => {
      spyOn(component, 'openTermsPopup').and.callThrough();
      component.openTermsPopup();
      expect(component.openTermsPopup).toHaveBeenCalled();
    });
  });
  describe('closeTermsModal', () => {
    it('makes expected calls', () => {
      spyOn(component, 'closeTermsModal').and.callThrough();
      component.closeTermsModal();
      expect(component.closeTermsModal).toHaveBeenCalled();
    });
  });
});
