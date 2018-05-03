import {VoterService} from "./voter.service";
import {ISession} from "../shared/event.model";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";



describe("Voter Service",()=>{
    var voterService:VoterService,
        mockHttp;

    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj("mockHttp",['delete', 'post']);
        mockHttp.delete.and.returnValue(of(false));
        mockHttp.post.and.returnValue(of(false));
        voterService = new VoterService(mockHttp);
    });
    describe("Delete Vote Method",()=>{
        it("Should remove Voter from the voters list",()=>{
            var session = {'id':6,'voters':['joe', 'john']}
            voterService.deleteVoter(3, <ISession>session, 'joe')
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        })

        it("should call http.delete with right url", ()=>{
            var session = {'id':6,'voters':['joe', 'john']}
            voterService.deleteVoter(3, <ISession>session, 'joe');
            expect(mockHttp.delete).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/joe");
        })
    });

    describe("Add voter Method", ()=>{
        it("should call http.post with right url",()=>{
            var session={'id': 6, 'voters':['joe', 'john']}
            voterService.addVoter(3, session, 'trinadh');
           expect(mockHttp.post).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/trinadh", {},jasmine.any(Object));
        })
        
    });
})