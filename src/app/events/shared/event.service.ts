import {Injectable, EventEmitter} from "@angular/core";
import {Subject, Observable} from 'rxjs/RX';
import {IEvent, ISession} from "./event.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError } from "rxjs/operators";


@Injectable()
export class EventService{
    constructor(private http:HttpClient){
    }  
    /* getEvents():Subject<IEvent[]>{
       let subject = new Subject<IEvent[]>();
       setTimeout(()=>{subject.next(EVENTS); subject.complete();},1500); 
       return subject;
    } */

    getEvents():Observable<IEvent[]>{
      return this.http.get<IEvent[]>("/api/events/")
        .pipe(catchError(this.handleError<IEvent[]>("get Events", [])))
    }

    getEvent(id:number):Observable<IEvent>{
      /* return EVENTS.find(function (event) { return event.id === id; }); */
      return this.http.get<IEvent>("/api/events/"+ id)
        .pipe(catchError(this.handleError<IEvent>("get Event")))
        
    }
    saveEvent(event){
      let url = "/api/events";
      let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post(url, event, options)
        .pipe(catchError(this.handleError<IEvent>("save Event")))

    }
    
    searchSessions(searchKey){
      return this.http.get<IEvent[]>('/api/sessions/search?search=' + searchKey);
    }
    private handleError<T>(operation = "operation", result?:T){
      return (error:any):Observable<T>=>{
        console.error(error);
        return Observable.of(result as T);
      }
    }
}
