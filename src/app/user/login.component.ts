import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl:'./login.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    `]
})

export class LoginComponent{
    loginInvalid:boolean;
    constructor(private auth:AuthService, private router:Router){

    }
    login(loginFormValues){
        this.auth.loginUser(loginFormValues.username, loginFormValues.password).subscribe(resp =>{
            if(resp){
                this.router.navigate(["/events"]);
            }else{
                this.loginInvalid = true;
            }
        });
    }
    cancel(){
        this.router.navigate(["/events"]);
    }
}