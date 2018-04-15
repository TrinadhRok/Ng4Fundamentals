import {Directive, OnInit, ElementRef, Inject, Input} from "@angular/core";
import {JQ_TOKEN} from "./jQuery.api";


@Directive({
    selector:"[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit{
    @Input('modal-trigger') elementId:string; 
    el:HTMLElement;
    constructor(private ref:ElementRef, @Inject(JQ_TOKEN) private $:any){
        this.el = ref.nativeElement;
    }
    ngOnInit(){
        this.el.addEventListener("click", ()=>{
            this.$(`#${this.elementId}`).modal();
            //this.$(`#searchResult`).modal();
        });
    }
}