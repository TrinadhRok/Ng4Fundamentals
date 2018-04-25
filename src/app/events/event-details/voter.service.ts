import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/RX';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()

export class VoterService{
    constructor(private http:HttpClient){

    }
    userHasVoted(session, username){
        return session.voters.some(voter => username ===voter);
    }
    addVoter(eventId, session, voterName){
        session.voters.push(voterName);
        let url =`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        let headers = new HttpHeaders({"Content-Type":"application/json"});
        let options = {headers:headers};

        this.http.post(url,{},options)
        .pipe(catchError(this.handleError("add voter")))
        .subscribe();
    }
    deleteVoter(eventId, session, voterName){
        session.voters = session.voters.filter(voter => voter!==voterName);
        let url =`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
        .pipe(catchError(this.handleError("delete voter")))
        .subscribe();
    }
    private handleError<T>(operation = "operation", result?:T){
        return (error:any):Observable<T>=>{
          console.error(error);
          return Observable.of(result as T);
        }
      }
}