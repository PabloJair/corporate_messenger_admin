import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {UserService} from '../../service/user.service';
import {UserModel} from '../../shared/models/UserModuleModel';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  currentUser: UserModel
  clicked: boolean;
  constructor(private auth: AuthService, private userService: UserService) {
    this.clicked = this.clicked !== undefined;
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
