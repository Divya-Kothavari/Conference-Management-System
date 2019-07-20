import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';
describe('CommonService', () => {
  let service: CommonService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CommonService] });
    service = TestBed.get(CommonService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
