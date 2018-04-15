import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from "../shared/event.model";

@Component({
    templateUrl:'./event-details.component.html',
    styles:[
        `
        .container{padding-left:20px; padding:right:20px;}
        .event-image{height:100px;}
        a{cursor:pointer;}
        `
    ]
})

export class EventDetailsComponent implements OnInit{
    event:IEvent;
    addMode:boolean;
    filterBy:string = 'all';
    sortBy:string='name';
    constructor(private eventService:EventService, private activatedRoute:ActivatedRoute){
        
    }
    ngOnInit(){
        console.log(+this.activatedRoute.snapshot.params['id']);
        this.activatedRoute.params.forEach(param=>{
            this.event = this.eventService.getEvent(+ param['id']);
        });
    }
    addSession(){
        this.addMode = true;
    }
    saveSession(session){
        const nextId = Math.max.apply(null, this.event.sessions.map(x => x.id));
        session.id= nextId+1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
    cancelAddSession(){
        this.addMode = false;
    }
    
}