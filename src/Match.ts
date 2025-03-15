import { Team } from "./Team";
export class Match {
  constructor() {}
  SimulateMatchUp = (Team1: Team, Team2: Team): number => {
    let Team1Score: number;
    let Team1BattingAvg: number = 0;
    let Team1BowlingAvg: number = 0;
    let Team2Score: number;
    let Team2BattingAvg: number = 0;
    let Team2BowlingAvg: number = 0;
    const Team1Batters = Team1.Players.slice(0, 6);
    const Team1Bowlers = Team1.Players.slice(6, 11);
    const Team2Batters = Team2.Players.slice(0, 6);
    const Team2Bowlers = Team2.Players.slice(6, 11);

    Team1Batters.map((player) => {
      Team1BattingAvg += player.BattingAvg;
    });
    Team1Bowlers.map((player) => {
      Team1BowlingAvg += player.BowlingAvg ?? 0;
    });

    Team2Batters.map((player) => {
      Team2BattingAvg += player.BattingAvg;
    });
    Team2Bowlers.map((player) => {
      Team2BowlingAvg += player.BowlingAvg ?? 0;
    });
    Team1BattingAvg = Team1BattingAvg / 6;
    Team1BowlingAvg = Team1BowlingAvg / 5;

    Team2BattingAvg = Team2BattingAvg / 6;
    Team2BowlingAvg = Team2BowlingAvg / 5;

    Team1Score = Team1BattingAvg / Team1BowlingAvg;
    Team2Score = Team2BattingAvg / Team2BowlingAvg;

    Team1Score = Team1Score * ((10 - Team1.ODIRanking) * 0.1);
    Team2Score = Team2Score * ((10 - Team2.ODIRanking) * 0.1);
    // console.log("Team of Score " + Team1.Name + "is " + Team1Score);
    // console.log("Team of Score " + Team2.Name + "is " + Team2Score);
    if (Team1Score > Team2Score) {
      console.log("Winner is ", Team1.Name);
      return 1;
    } else {
      console.log("Winner is ", Team2.Name);
      return 2;
    }
  };
}
