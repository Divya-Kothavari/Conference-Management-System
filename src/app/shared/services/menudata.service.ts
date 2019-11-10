import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrgMenu} from '../../pages/header/org-menu.model';
@Injectable()
export class MenudataService {

  private menuData: BehaviorSubject<OrgMenu[]> = new BehaviorSubject([]);
  currentMessage = this.menuData.asObservable();

  constructor() { }

  changeMessage(changedData:OrgMenu[]) {
    this.menuData.next(changedData);
  }
}