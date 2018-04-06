import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {NavBarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {ToastrService} from './common/toastr.service';
import {routes} from './routes';

import {EventsComponent} from './events-app.component';
import {AuthService} from "./user/auth.service"

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventService,
    EventRouteActivator,
    EventResolveService} from "./events/index"



@NgModule({
    imports:[BrowserModule,RouterModule.forRoot(routes)],
    declarations:[
        EventsComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    bootstrap:[EventsComponent],
    providers:[
        EventService,
        ToastrService,
        EventRouteActivator,
        {provide:'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventResolveService,
        AuthService
    ]
})

export class AppModule{

}
export function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
    return window.confirm("You have not saved this form, do you really want to cancel?");
    return true;
}