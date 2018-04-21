import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './event.service';
import {Observable} from "rxjs/RX";
import {IEvent} from "./event.model";

@Injectable()
export class EventResolveService implements Resolve<any>{
    constructor(private eventService:EventService){
        
       }
    resolve():Observable<IEvent[]>{
        //return this.eventService.getEvents().map(events =>events)
        return this.eventService.getEvents()
    }
}