import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenido';
  private currentUrl = '';
  specialPage: boolean;

  private specialPages: any[] = [
    '/login',
  ];

  constructor( private router: Router,
               private location: Location) {

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
