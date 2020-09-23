import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/UserService';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;
  currentUser: UserModel
  clicked: boolean;
  home =false;


  constructor(private auth:AuthService,private userService:UserService) {
    this.clicked = this.clicked === undefined ? false : true;
    this.currentUser = userService.getCurrentUser



  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  logOut() {
      this.auth.logout()
  }
}
