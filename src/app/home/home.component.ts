import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User, UserInfo } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    userInfo: UserInfo;
    // userInfo: {};

    constructor(private userService: UserService, private http: Http) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.getUserInfo();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    getUserTransitions() {
        this.userService.getTransations().subscribe(() => {  });
    }

    getUserInfo() {
        this.userService.getInfo().subscribe((data) => { this.userInfo = data; console.log(this.userInfo); });
    }
}