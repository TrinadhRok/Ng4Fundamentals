import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared/event.model";

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html'
})

export class SessionListComponent{
    @Input() sessions: ISession[];
    @Input() filterBy:string;
    @Input() sortBy:string;
    visibleSessions: ISession[];
    ngOnChanges(){
        if(this.sessions){
            this.filterSessions();
            this.sortBy ==="name"? this.visibleSessions.sort(sortByName): this.visibleSessions.sort(sortByVote); 
        }
        
    }
    filterSessions(){
        if(this.filterBy =='all'){
            this.visibleSessions = this.sessions.slice(0);
            console.log(this.visibleSessions);
        }else{
            this.visibleSessions = this.sessions.filter(event => event.level.toLowerCase() === this.filterBy);
            console.log(this.visibleSessions);
        }
    }
}
function sortByName(s1,s2){
    if(s1.name >s2.name)
        return 1;
    else if(s1 ===s2)
        return 0;
    else return -1;
}
function sortByVote(s1, s2){
    return s2.voters.length - s1.voters.length;
}