import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';
import { CommonService } from '../../core/services/common.service';
import { ProfileHeaderComponent } from './profile-header.component';
describe('ProfileHeaderComponent', () => {
  let component: ProfileHeaderComponent;
  let fixture: ComponentFixture<ProfileHeaderComponent>;
  beforeEach(() => {
    const jwtServiceStub = { logout_clear_storage: () => ({}) };
    const routerStub = { navigate: array1 => ({}) };
    const commonServiceStub = { isCollapsed: { subscribe: () => ({}) } };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProfileHeaderComponent],
      providers: [
        { provide: JwtService, useValue: jwtServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: CommonService, useValue: commonServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProfileHeaderComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit if', () => {
    it('makes expected calls', () => {
      window.localStorage.setItem('user_details', '{"displayname":"test"}');
      window.localStorage.setItem('org_details', '{"Domain":{"logo_uri":"test","displayname":"test"}}');
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  describe('ngOnInit else', () => {
    it('makes expected calls', () => {
      window.localStorage.setItem('user_details', '{"displayname":""}');
      window.localStorage.setItem('org_details', '{"Domain":{"logo_uri":"","displayname":""}}');
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  describe('logOut', () => {
    it('makes expected calls', () => {
      const jwtServiceStub: JwtService = fixture.debugElement.injector.get(
        JwtService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(jwtServiceStub, 'logout_clear_storage').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.logOut();
      expect(jwtServiceStub.logout_clear_storage).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
