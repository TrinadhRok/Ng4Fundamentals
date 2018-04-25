import { Component,OnInit } from '@angular/core';
import {AuthService} from "../app/user/auth.service";

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent implements OnInit {
  title = 'app';
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.checkAuthenticationStatus();
  }
}
