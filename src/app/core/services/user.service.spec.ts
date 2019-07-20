import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './user.service';
describe('UserService', () => {
  let service: UserService;
  beforeEach(() => {
    const httpClientStub = { post: (arg1, data2) => ({}) };
    const routerStub = { navigate: array1 => ({}) };
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: HttpClient, useValue: httpClientStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    service = TestBed.get(UserService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('logoutUser', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      service.logoutUser();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
  describe('getToken', () => {
    it('makes expected calls', () => {
      spyOn(service, 'getToken').and.callThrough();
      service.getToken();
      expect(service.getToken).toHaveBeenCalled();
    });
  });
  describe('loggedIn', () => {
    it('makes expected calls', () => {
      spyOn(service, 'loggedIn').and.callThrough();
      service.loggedIn();
      expect(service.loggedIn).toHaveBeenCalled();
    });
  });
  describe('loginUser', () => {
    it('makes expected calls', () => {
      spyOn(service, 'loginUser').and.callThrough();
      service.loginUser({username: 'mark', password: 'edunxt'});
      expect(service.loginUser).toHaveBeenCalled();
    });
  });
  describe('get_domian_details', () => {
    it('makes expected calls', () => {
      spyOn(service, 'get_domian_details').and.callThrough();
      service.get_domian_details({domainid: 3});
      expect(service.get_domian_details).toHaveBeenCalled();
    });
  });
});
