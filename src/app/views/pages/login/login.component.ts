import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {ToastService} from 'ng-uikit-pro-standard';
import {UserService} from '../../../service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {ServerCode} from '../../../shared/models/server-code.enum';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.max(10), Validators.minLength(6)]),

  });
  constructor
  (private auth: AuthService,
   private router: Router,
   private toastService: ToastService,
   private userService: UserService
  ) {
    if (this.userService.getCurrentUser) {
      this.router.navigateByUrl('/home');

      return
    }

  }
  title = 'Administrador'

  login() {

    this.auth.login(
      this.email.value,
      this.password.value
    ).subscribe(value => {

      // tslint:disable-next-line:triple-equals
      if (value.Code == ServerCode.SUCCESS) {
        this.userService.setCurrentUser(value.Data)

        this.router.navigateByUrl('/home');

      } else {
        const options = { enableHtml: false , positionClass: 'md-toast-top-center'};
        this.toastService.error('Tus credenciales son invalidas', 'Error!', options);
      }



    }, error => {
      const options = { enableHtml: false , positionClass: 'md-toast-top-center'};
      this.toastService.error('Tus credenciales son invalidas', 'Error!', options);

    })
  }

  private get email() {return this.form.get('email'); }
  private get password() {return this.form.get('password'); }
  ngOnInit() {
  }

}
