import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {
    private userDetails = new BehaviorSubject<object>({});
    public userData = this.userDetails.asObservable();
    constructor() {}
  updateUserData(user) {
   this.userDetails.next(user);
  }
}