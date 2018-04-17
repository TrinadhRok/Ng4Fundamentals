import {Injectable} from "@angular/core";

@Injectable()

export class VoterService{
    userHasVoted(session, username){
        return session.voters.some(voter => username ===voter);
    }
    addVoter(session, username){
        session.voters.push(username);
    }
    deleteVoter(session, username){
        session.voters = session.voters.filter(voter => voter!==username);
    }
}