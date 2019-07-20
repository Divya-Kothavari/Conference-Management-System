import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {

  isCollapsed: BehaviorSubject<boolean>;

  constructor() {
     this.isCollapsed = new BehaviorSubject(false);
    }
}
