import {Component, Input, EventEmitter, Output} from "@angular/core";
import { count } from "rxjs/operator/count";

@Component({
    selector:"upvote",
    template:`
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls:["./upvote.component.css"]
})

export class UpvoteComponent{
    @Input() count: number;
    @Input() set voted(val){
        this.iconColor=  val?'red':'white';
    };
    @Output() vote = new EventEmitter();
    public iconColor;
    onClick(){
        this.vote.emit({});
    }
}