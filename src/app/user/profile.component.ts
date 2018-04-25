import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {Inject} from '@angular/core';
import {TOASTR_TOKEN, Toastr} from '../common/toastr.api';


@Component({
  templateUrl:'./profile.component.html',
  styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input{background:#E3c3c5;}
    .error ::-webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999;}
  `]
})
export class ProfileComponent implements OnInit {
      profileFormGroup:FormGroup;
      private firstName:FormControl
      private lastName:FormControl
      constructor( private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr){

      }
      ngOnInit(){
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName,[Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.profileFormGroup = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
        }); 
      }
      isFirstNameValid(){
        return this.firstName.invalid && this.firstName.touched;
      }
      islastNameValid(){
        return this.lastName.invalid && this.lastName.touched; 
      }
      save(profileformValues){
        if(this.profileFormGroup.valid){
          this.authService.updateCurrentuser(profileformValues.firstName, profileformValues.lastName).subscribe(()=>{
            this.toastr.success("Profile Changes Saved", "Profile");
          });
        }
      }
      cancel(){
        this.router.navigate(["/events"]);
      }
      logout(){
        this.authService.logout().subscribe(resp =>{
          this.router.navigate(["/user/login"]);
        });
      } 
}