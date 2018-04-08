import {Component} from "@angular/core";
import{IEvent} from "./shared/event.model";
import {EventService} from "./shared/event.service";
import {Router} from "@angular/router";

@Component({
    templateUrl:'./edit-event.component.html'
})

export class EditEventComponent{
    constructor(private eventService:EventService, private router:Router){

    }
    editEvent:IEvent={
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: './assets/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        },
        sessions:[]
    }
    editSaveEvent(newEventObj){
        this.eventService.createNewEvent(newEventObj);
        this.router.navigate(['events']);
    }
    cancel(){
        this.router.navigate(['events']);
    }

}


