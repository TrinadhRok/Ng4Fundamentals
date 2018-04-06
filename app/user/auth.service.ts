import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()

export class AuthService{
    currentUser:IUser;
    loginUser(userName:string,  password:string){
        this.currentUser ={
            id:1,
            name:userName,
            firstName:"Jhon",
            lastName:"Papa"
        }
    }
    isAuthrenticated(){
        return !!this.currentUser;
    }
    updateCurrentuser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}