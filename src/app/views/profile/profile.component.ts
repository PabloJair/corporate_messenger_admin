import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserModel } from 'src/app/shared/models/UserModuleModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser:UserModel
  constructor(public userService:UserService) {

    this.currentUser = userService.getCurrentUser
   }

  ngOnInit() {
  }

}
