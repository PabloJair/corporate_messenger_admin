import { Injectable } from '@angular/core';
import {UserModel} from '../shared/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private currentUser: UserModel = null;
  constructor() { }
  public  setCurrentUser(item: UserModel) {
    this.currentUser = item
    localStorage.setItem('currentUser', JSON.stringify(item));
  }

  public  removeCurrentUser() {
    this.currentUser = null
    localStorage.removeItem('currentUser');
  }
  public get getCurrentUser(): UserModel {


    if (this.currentUser == null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    }
    return   this.currentUser
  }

}
