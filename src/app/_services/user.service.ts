import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        let headers = new Headers(),
            // body = 'email=' + encodeURIComponent(user.email) + '&' + 'password=' + encodeURIComponent(user.password);
            body = `username=${user.username}&password=${user.password}&email=${user.email}`;
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://193.124.114.46:3001/users', body, { headers: headers }).map((response: Response) => response.json());
        // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    getTransations() {
        console.log(this);
        // this.userService.create(this.userService.user: User);
        // this.userService.create(this.currentUser)
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let headers = new Headers({ 'Authorization': 'Bearer '});
        // let jwt = this.userService.jwt();
        // let headers = new Headers(),
            // body = `username=${user.username}&password=${user.password}&email=${user.email}`;
            // headers.append('Content-Type', 'application/x-www-form-urlencoded');

        // return this.http.post('http://193.124.114.46:3001/api/protected/transactions', body, { headers: headers }).map((response: Response) => response.json());
        return this.http.get('http://193.124.114.46:3001/api/protected/transactions', this.jwt()).map((response: Response) => console.log(response.json()));
                // this.http.get('/api/users/', this.jwt()).map((response: Response) => response.json());

                //   .map(this.extractData)
                //   .catch(this.handleError);
    }

    getInfo() {
        return this.http.get('http://193.124.114.46:3001/api/protected/user-info', this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.id_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.id_token });
            return new RequestOptions({ headers: headers });
        }
    }
}