import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {UserService} from './UserService';
import {UserModel} from '../models/UserModel';
import {ServerResponseModel} from '../models/ServerRespondeModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private PHP_API_SERVER = environment.urlServer ;
  private API_LOGIN =environment.API.LOGIN



  constructor(private http: HttpClient,private router: Router,  private userService: UserService
  ) {}

  login(username: string, password: string) {

    return this.http.post<ServerResponseModel<UserModel>>(`${(this.PHP_API_SERVER)}${this.API_LOGIN}`,{email:username,password:password});
  }

  logout() {
    // remove user from local storage to log user out

    this.userService.removeCurrentUser()

    this.router.navigateByUrl("/login");

  }

}
