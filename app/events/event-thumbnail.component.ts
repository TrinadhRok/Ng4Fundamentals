import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from "./shared/event.model";


@Component({
    selector:'event-thumbnail',
    template:`
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <!-- <div [ngClass]="addClassToTime()" [ngSwitch]="event?.time">-->
            <div [ngStyle]="{'color': event?.time==='10:00 am'?'green':'red', 'font-weight': event?.time==='10:00 am'?'bold':'normal'}" [ngSwitch]="event?.time">
            Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">Early Start</span>
                <span *ngSwitchCase="'10:00 am'">Late Start</span>
                <span *ngSwitchDefault>Normal Start</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
               <!--<input type="button" class="btn btn-primary" value="click Me!" (click)="clickHandler()"/> -->
            </div>
            <div *ngIf="event?.onlineUrl">Online URL: {{event?.onlineUrl}}</div>
        </div>
    `,
    styles:[`
        .pad-left{padding-left:15px;}
        .well div{color:#bbb;}
        .thumbnail{min-height:210px;}
        .green{color:green !important;}
        .bold{font-weight:bold !important;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent;

    addClassToTime(){
        var bool = this.event && this.event.time ==='8:00 am'; 
        return {'green': bool, 'bold':bool}
    }
   
}