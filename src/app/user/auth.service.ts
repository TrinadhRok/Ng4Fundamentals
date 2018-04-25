import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Options } from "selenium-webdriver/ie";
import { tap, catchError } from "rxjs/operators";
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService{
    currentUser:IUser;
    constructor(private http:HttpClient){

    }
    loginUser(userName:string,  password:string){
        let url = '/api/login '
        let options = {'headers':new HttpHeaders({'Content-Type':'application/json'})}
        let loginInfo = {'username':userName, 'password':password}
        return this.http.post(url, loginInfo, options)
        .pipe(tap(resp =>{
            this.currentUser = resp['user'];
         }))
         .pipe(catchError(err =>{
             return of(false);
         }))
    }
    isAuthrenticated(){
        return !!this.currentUser;
    }
    updateCurrentuser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        let options = {'headers':new HttpHeaders({'Content-Type':'application/json'})}

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }
    checkAuthenticationStatus(){
        this.http.get('/api/currentIdentity')
        .pipe(tap(result =>{
            if(result instanceof Object){
                this.currentUser = <IUser>result;
            }
        })).subscribe();
    }
    logout(){
        this.currentUser = undefined;
        let options = {'headers':new HttpHeaders({'Content-Type':'application/json'})}
        return this.http.post("/api/logout", {},options);
    }
}