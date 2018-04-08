import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventResolveService, EditEventComponent} from "./events/index"

export const routes:Routes =[
    {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events/editEvent',component:EditEventComponent},
    {path:'events',component:EventsListComponent,resolve:{events:EventResolveService}},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'events/session/new', component:CreateSessionComponent},
    {path:'404',component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'}
]