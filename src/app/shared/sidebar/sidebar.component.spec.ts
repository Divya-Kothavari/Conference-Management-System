import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../core/services/common.service';
import { SidebarComponent } from './sidebar.component';
describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  beforeEach(() => {
    const routerStub = {};
    const activatedRouteStub = {};
    const commonServiceStub = {
      isCollapsed: { subscribe: () => ({}), next: () => ({}) }
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SidebarComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: CommonService, useValue: commonServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit if', () => {
    it('makes expected calls', () => {
      window.localStorage.setItem('org_details', '{"Domain":{"logo_uri":"test","displayname":"test"}}');
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  describe('ngOnInit else', () => {
    it('makes expected calls', () => {
      window.localStorage.setItem('org_details', '{"Domain":{"logo_uri":"","displayname":""}}');
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  describe('stateChanged', () => {
    it('makes expected calls', () => {
      spyOn(component, 'stateChanged').and.callThrough();
      component.stateChanged();
      expect(component.stateChanged).toHaveBeenCalled();
    });
  });
  describe('changeTrigger', () => {
    it('makes expected calls', () => {
      spyOn(component, 'changeTrigger').and.callThrough();
      component.changeTrigger();
      expect(component.changeTrigger).toHaveBeenCalled();
    });
  });
});
