"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    constructor() {
        this.SimulateMatchUp = (Team1, Team2) => {
            let Team1Score;
            let Team1BattingAvg = 0;
            let Team1BowlingAvg = 0;
            let Team2Score;
            let Team2BattingAvg = 0;
            let Team2BowlingAvg = 0;
            const Team1Batters = Team1.Players.slice(0, 6);
            const Team1Bowlers = Team1.Players.slice(6, 11);
            const Team2Batters = Team2.Players.slice(0, 6);
            const Team2Bowlers = Team2.Players.slice(6, 11);
            Team1Batters.map((player) => {
                Team1BattingAvg += player.BattingAvg;
            });
            Team1Bowlers.map((player) => {
                var _a;
                Team1BowlingAvg += (_a = player.BowlingAvg) !== null && _a !== void 0 ? _a : 0;
            });
            Team2Batters.map((player) => {
                Team2BattingAvg += player.BattingAvg;
            });
            Team2Bowlers.map((player) => {
                var _a;
                Team2BowlingAvg += (_a = player.BowlingAvg) !== null && _a !== void 0 ? _a : 0;
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
            }
            else {
                console.log("Winner is ", Team2.Name);
                return 2;
            }
        };
    }
}
exports.Match = Match;
