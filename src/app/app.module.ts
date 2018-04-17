import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {NavBarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    TOASTR_TOKEN,
    JQ_TOKEN,
    Toastr} from "./common/index";
import {routes} from './routes';

import {EventsAppComponent} from './events-app.component';
import {AuthService} from "./user/auth.service";

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EditEventComponent,
    EventDetailsComponent,
    SessionListComponent,
    EventService,
    EventRouteActivator,
    EventResolveService,
    DurationPipe,
    UpvoteComponent,
    VoterService} from "./events/index"

let toastr:Toastr = window['toastr'];
let jQuery:Object = window['$'];

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
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent
    ],
    bootstrap:[EventsAppComponent],
    providers:[
        EventService,
        {provide:TOASTR_TOKEN, useValue:toastr},
        {provide:JQ_TOKEN, useValue:jQuery},
        EventRouteActivator,
        {provide:'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventResolveService,
        AuthService,
        VoterService
    ]
})

export class AppModule{

}
export function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
    return window.confirm("You have not saved this form, do you really want to cancel?");
    return true;
}