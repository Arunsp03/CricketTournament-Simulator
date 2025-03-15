export class Team {
  Name: string;
  Players: any[];
  ODIRanking: number;
  constructor(Name: string, Players: any[], ODIRanking: number) {
    this.Name = Name;
    this.Players = Players;
    this.ODIRanking = ODIRanking;
  }
}
