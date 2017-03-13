import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
    // login(username: string, password: string) {
        let headers = new Headers(),
            body = 'email=' + encodeURIComponent(email) + '&' + 'password=' + encodeURIComponent(password);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Content-Type', 'application/json');
        // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        // return this.http.post('http://193.124.114.46:3001/sessions/create', JSON.stringify({ email, password }))
        return this.http.post('http://193.124.114.46:3001/sessions/create', body, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user.id_token);
                if (user && user.id_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}