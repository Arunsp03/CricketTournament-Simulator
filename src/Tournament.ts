import { Team } from "./Team";
import { shuffleArray } from "./utils";
import { Match } from "./Match";
import { TeamData } from "./TeamData";
export class Tournament {
  TournamentArray: number[];
  MatchObj: Match;
  TeamdataObj: TeamData;

  constructor() {
    this.TournamentArray = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7]);
    this.MatchObj = new Match();
    this.TeamdataObj = new TeamData();
  }
  startTournament() {
    while (this.TournamentArray.length > 1) {
      let nextRound: number[] = [];
      console.log("-----------NEW ROUND-----------");
      
      for (let index = 0; index < this.TournamentArray.length; index += 2) {
        let Team1Index = index;
        let Team2Index = index + 1;

        const Team1ID = this.TournamentArray[Team1Index];
        const Team2ID = this.TournamentArray[Team2Index];
        // console.log("Team1 index ", Team1Index);
        // console.log("Team2 index ", Team2Index);

        const Team1Data = this.TeamdataObj.Teams[Team1ID];
        const Team2Data = this.TeamdataObj.Teams[Team2ID];
        const Team1Name = this.TeamdataObj.TeamNames[Team1ID];
        const Team2Name = this.TeamdataObj.TeamNames[Team2ID];
        console.log(`Match: ${Team1Name} vs ${Team2Name}`);
        // console.log("Team1data ", Team1Data);
        // console.log("Team2data ", Team2Data);
        const Team1 = new Team(Team1Name, Team1Data, 1);
        const Team2 = new Team(Team2Name, Team2Data, 2);

        const result = this.MatchObj.SimulateMatchUp(Team1, Team2);
        if (result == 1) {
          nextRound.push(Team1ID);
        } else {
          nextRound.push(Team2ID);
        }
        //  console.log("Array Now ",this.TournamentArray);
      }
      this.TournamentArray = nextRound;
    }
  }
}
