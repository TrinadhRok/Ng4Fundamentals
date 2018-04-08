import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
    templateUrl:'./create-session.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea{background:#E3c3c5;}
    .error ::-webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999;}
  `]
})

export class CreateSessionComponent implements OnInit{
    createSessionForm:FormGroup;
    sessionName:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;

    ngOnInit(){
        this.sessionName = new FormControl(this.sessionName,[Validators.required])
        this.presenter = new FormControl(this.presenter,[Validators.required])
        this.duration = new FormControl(this.duration,[Validators.required])
        this.level = new FormControl(this.level,[Validators.required])
        this.abstract = new FormControl(this.abstract,[Validators.required,Validators.maxLength(10)])

        this.createSessionForm = new FormGroup({
            sessionName: this.sessionName,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }
}