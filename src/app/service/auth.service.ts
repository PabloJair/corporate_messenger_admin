import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerResponseModel} from '../shared/models/server-response-model';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {UserModel} from './API/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private PHP_API_SERVER = environment.HOST;

  private API_LOGIN = 'login'

  constructor(private http: HttpClient, private router: Router,  private userService: UserService
  ) {
  }

  login(username: string, password: string) {

    // tslint:disable-next-line:max-line-length
    return this.http.post<ServerResponseModel<UserModel>>(`${(this.PHP_API_SERVER)}${this.API_LOGIN}`, {email: username, password: password});
  }

  logout() {
    // remove user from local storage to log user out

    this.userService.removeCurrentUser()

    this.router.navigateByUrl('/login');

  }

}
