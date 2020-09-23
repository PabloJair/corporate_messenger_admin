import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {UserService} from './services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenido';
  private currentUrl = '';
  specialPage: boolean = false

  private specialPages: any[] = [
    '/login',
  ];

  constructor( private router: Router,
               private location: Location,
               private userService:UserService,
               ) {

    if(userService.getCurrentUser==null) {
      this.router.navigateByUrl("/login");
    }
    this.router.events.subscribe((route: any) => {
      if (route.routerEvent) {
        this.currentUrl = route.routerEvent.url;
      } else {
        this.currentUrl = route.url;
      }
      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });
  }

}
