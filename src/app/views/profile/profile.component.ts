import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../shared/models/UserModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: UserModel

  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.email]),
    paternal_surname: new FormControl(null, [Validators.required, Validators.max(10), Validators.minLength(6)]),
    maternal_surname: new FormControl(null, [Validators.required, Validators.max(10), Validators.minLength(6)]),

  });


  private get name() {return this.form.get('name'); }
  private get paternal_surname() {return this.form.get('paternal_surname'); }
  private get maternal_surname() {return this.form.get('maternal_surname'); }

  constructor(public userService: UserService) {

    this.currentUser = userService.getCurrentUser
    this.name.setValue(this.currentUser.name)
    this.paternal_surname.setValue(this.currentUser.paternal_surname)
    this.maternal_surname.setValue(this.currentUser.maternal_surname)

  }

  ngOnInit() {
  }

}
