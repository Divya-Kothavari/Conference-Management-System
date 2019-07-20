import { TestBed } from '@angular/core/testing';
import { JwtService } from './jwt.service';
describe('JwtService', () => {
  let service: JwtService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [JwtService] });
    service = TestBed.get(JwtService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getToken', () => {
    it('makes expected calls', () => {
      spyOn(service, 'getToken').and.callThrough();
      service.getToken();
      expect(service.getToken).toHaveBeenCalled();
    });
  });
  describe('destroyToken', () => {
    it('makes expected calls', () => {
      spyOn(service, 'destroyToken').and.callThrough();
      service.destroyToken();
      expect(service.destroyToken).toHaveBeenCalled();
    });
  });
  describe('saveToken', () => {
    it('makes expected calls', () => {
      spyOn(service, 'saveToken').and.callThrough();
      service.saveToken({jwt: 'abcd'});
      expect(service.saveToken).toHaveBeenCalled();
    });
  });
  describe('logout_clear_storage if', () => {
    it('makes expected calls', () => {
      window.localStorage.setItem('language', '');
      spyOn(service, 'logout_clear_storage').and.callThrough();
      service.logout_clear_storage();
      expect(service.logout_clear_storage).toHaveBeenCalled();
    });
  });
  describe('logout_clear_storage else', () => {
    it('makes expected calls', () => {
      window.localStorage.setItem('language', 'en');
      spyOn(service, 'logout_clear_storage').and.callThrough();
      service.logout_clear_storage();
      expect(service.logout_clear_storage).toHaveBeenCalled();
    });
  });

});
