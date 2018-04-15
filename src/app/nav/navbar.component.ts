import {Component, Inject} from '@angular/core';
import {AuthService} from "../user/auth.service";
import {EventService} from "../events/shared/event.service";
import {ISession} from "../events/shared/event.model";

@Component({
    selector:"nav-bar",
    templateUrl:"./navbar.component.html",
    styles:[`
        li > a.active{color:#f97924;}
        .nav.navbar-nav{font-size:15px;}
        #searchForm {margin-right:100px;}
        @media(max-width:1200px){
            #searchForm{
                display:none;
            }
        }
    `]
})

export class NavBarComponent{
    foundSessions:ISession[] = []
    constructor(private authService:AuthService, private eventService:EventService){
    }
    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });

    }
}