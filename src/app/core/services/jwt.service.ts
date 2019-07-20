import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken() {
    // return window.localStorage['jwtToken'];
    return JSON.parse(window.localStorage.getItem('jwtToken'));
  }

  saveToken(data) {
   window.localStorage.setItem('jwtToken', JSON.stringify(data));
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  logout_clear_storage() {

    let language = '';
    if (!localStorage.getItem('language')) {
        language = 'en';
    } else {
      language = localStorage.getItem('language');
    }

    window.localStorage.clear();
    localStorage.setItem('language', language);
  }

}
