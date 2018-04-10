import {Component, Input} from "@angular/core";

@Component({
    selector:'collapseble-well',
    template:`
    <div class="well pointble" (click)="toogleContent();">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
    `,styles:[
        `
        .pointble{cursor:pointer;}
        `
    ]
})
export class CollapsibleWellComponent{
    visible:boolean;
    @Input() title:string;
    toogleContent(){
        this.visible = !this.visible;
        console.log("sdfsd");
    }
}

