import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumb',
    template:`
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <!-- <input type="button" value="clickMe" (click)="handleClickMe()"/>-->
    </div>
    `,
    styles:[`
        .pad=left{padding-left:15px;}
        .well div{color:#bbb}
        .thumbnail{min-height:210px;}
    `]
})

export class EventThumbnailComponent{
    @Input () event:any ;
    @Output() eventClick = new EventEmitter();
    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }
    /*testVar = "testValue" */
}