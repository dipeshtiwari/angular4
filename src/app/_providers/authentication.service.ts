import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiEndpoint } from '../_helpers/apiEndpoint';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(value: any) {
        console.log(value);
        return this.http.post(ApiEndpoint.LOGIN, value)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }, (err: any) => {
                return Observable.throw(err);
            });
    }

    // Logout the app & remove storage
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
