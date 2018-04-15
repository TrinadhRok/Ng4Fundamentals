import {Component, Input, Inject, ViewChild, ElementRef} from "@angular/core";
import {JQ_TOKEN} from "./jQuery.api";
import { ModalTriggerDirective } from ".";

@Component({
    selector:'simple-modal',
    template:`
        <!-- Modal -->
        <div class="modal fade" id="{{elementId}}" #modalContainer role="dialog">
        <div class="modal-dialog">
        
            <!-- Modal content-->
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">{{title}} sss</h4>
            </div>
            <div class="modal-body" (click)="closeModal()">
               <ng-content></ng-content>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>
            
        </div>
        </div>
    `,
    styles:[`
    modal-body{height:250px; overflow-y:scroll;}
    `]
})

export class SimpleModalComponent{
    @Input() elementId:string;
    @Input() title:string;
    @ViewChild('modalContainer') modalElement:ElementRef;
    constructor(@Inject(JQ_TOKEN) private $:any){

    }

    closeModal(){
        this.$(this.modalElement.nativeElement).modal('hide');
    }
}