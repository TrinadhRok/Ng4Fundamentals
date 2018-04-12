import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {NavBarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {ToastrService} from './common/toastr.service';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {routes} from './routes';

import {EventsAppComponent} from './events-app.component';
import {AuthService} from "./user/auth.service";

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    SessionListComponent,
    EventService,
    EventRouteActivator,
    EventResolveService,
    DurationPipe,
    EditEventComponent} from "./events/index"



@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        EditEventComponent,
        Error404Component,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    bootstrap:[EventsAppComponent],
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