import {Component, OnInit} from "@angular/core";
import {EventService} from './shared/event.service'
import {ActivatedRoute} from '@angular/router';
import {IEvent} from "./shared/event.model";


@Component({
    template:`
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="clickOnThumb(event.name)"  (outEmitter)="emitterReceiveHandler($event)"[event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
    styles:[`
        .pad-left{padding-left:30px;}
    `]
})

export class EventsListComponent implements OnInit{
    events:IEvent[];
   constructor(private eventService:EventService, private route: ActivatedRoute){
    
   }
   ngOnInit(){
    //this.eventService.getEvents().subscribe(events=>this.events = events);
    //this.route.data['events'].subscribe(events=> this.events=events);
    //this.events = this.route.data['events']
    this.route.data.subscribe(({ events }) => {
        this.events = events;
    });
   }
}