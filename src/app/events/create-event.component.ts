import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from "./shared/event.service"
@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input{background:#E3c3c5;}
    .error ::-webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999;}
  `]
})

export class CreateEventComponent{
    isDirty:boolean = true;
    newEvent:any;
    constructor(private router:Router, private eventService:EventService){
        
    }
    cancel(){
        this.router.navigate(['events']);
    }
    saveEvent(newEventObj){
        this.eventService.saveEvent(newEventObj).subscribe(result =>{
            this.isDirty = false;
            this.router.navigate(['events']);
        });
    }
}