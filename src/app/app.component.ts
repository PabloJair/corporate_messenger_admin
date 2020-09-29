import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit , OnDestroy {
  specialPage = false;

  private specialPages: any[] = [
    '/login',
    '/register',
    '/lock',
  ];



  private currentUrl = '';

  constructor(private router: Router, private location: Location) {


  }

  ngOnInit(): void {

    this.router.events.subscribe((route: any) => {
      if (route.routerEvent) {
        this.currentUrl = route.routerEvent.url;
      } else {
        this.currentUrl = route.url;
      }
      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });
  }

  ngOnDestroy(): void {
  }

}
