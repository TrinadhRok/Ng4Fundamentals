import {SessionListComponent} from "./session-list.component";
import {ISession} from "../shared/event.model";


describe("Session List Component",()=>{
    var component:SessionListComponent,
        mockAuthService,
        mockVoterService;
    beforeEach(()=>{
        component = new SessionListComponent(mockAuthService,mockVoterService );
    });
    describe("ng Change",()=>{
        it("Session Filtering should done properly",()=>{
            component.sessions = <ISession[]>[
                {name:"session 3", level:"beginer"},
                {name:"session 1", level:"intermediate"},
                {name:"session 2", level:"intermediate"}
            ]
            component.filterBy = "intermediate";
            component.sortBy = "name";

            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(2);
        })

        it("Session sorting should done properly",()=>{
            component.sessions = <ISession[]>[
                {name:"session 3", level:"beginer"},
                {name:"session 1", level:"intermediate"},
                {name:"session 2", level:"intermediate"}
            ]
            component.filterBy = "all";
            component.sortBy = "name";

            component.ngOnChanges();
            expect(component.visibleSessions[2].name).toBe('session 3');
        })

    })
});
