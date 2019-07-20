import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
 private  apiendpoint = 'http://ec2-18-219-110-32.us-east-2.compute.amazonaws.com:4052/';
  private loginUrl = this.apiendpoint + 'user/signin';
 private domainDetailsUrl = this.apiendpoint + 'organization/getdomaindetails';

 headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
     Authorization: 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0'
    };

     constructor(private http: HttpClient,
                 private router: Router) {
        }

   get_domian_details(data) {
        return this.http.post<any>(this.domainDetailsUrl, data);
    }


     loginUser(user) {
         const user1 = new HttpParams()
             .set('grant_type', 'password')
             .set('username', user.username)
             .set('password', user.password)
         return this.http.post<any>(this.loginUrl, user1.toString(), {
             headers: this.headers
         });
        }

    logoutUser() {
        localStorage.removeItem('token');
        this.router.navigate(['/events']);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

}
