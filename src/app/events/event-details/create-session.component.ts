import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ISession} from "../shared/event.model";


@Component({
    selector:'create-session',
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
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();
    createSessionForm:FormGroup;
    sessionName:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;
    constructor(private router:Router){

    }
    

    ngOnInit(){
        this.sessionName = new FormControl(this.sessionName,[Validators.required])
        this.presenter = new FormControl(this.presenter,[Validators.required])
        this.duration = new FormControl(this.duration,[Validators.required])
        this.level = new FormControl(this.level,[Validators.required])
        this.abstract = new FormControl(this.abstract,[Validators.required, Validators.maxLength(10), this.restictedWords(['foo', 'hell'])])

        this.createSessionForm = new FormGroup({
            sessionName: this.sessionName,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }
    private restictedWords(words){
        return function(control:FormControl){
            if(!words) return null;
            if(control && control.value == null) return null;
            let invalidWords = words.map(w=> control.value.includes(w) ?w:null).filter(w => w != null);

             return invalidWords && invalidWords.length > 0
                    ?{"restrictedWords":invalidWords.join(',')}
                    :null
        }
    }

    cancel(){
        this.cancelAddSession.emit();
    }
    saveSession(newSesson){
        let sesson:ISession = {
            id:undefined,
            name:newSesson.sessionName,
            presenter:newSesson.presenter,
            duration:newSesson.duration,
            level:newSesson.level,
            abstract:newSesson.abstract,
            voters:[]
        }
        this.saveNewSession.emit(sesson);
    }
}