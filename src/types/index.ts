export type TeamName = string;

export const COL = {
  PLACE: 'Place',
  TEAM: 'Team',
  PLAYED: 'Played',
  WIN: 'Win',
  DRAW: 'Draw',
  LOST: 'Lost',
  POINTS: 'Points'
};

export interface Team {
  "name": TeamName;
  "played": number;
  "win": number;
  "draw": number;
  "lost": number;
  "points": number;
};

export type Teams = Team[];

export interface MatchType {
  firstTeam: TeamName,
  secondTeam: TeamName,
  firstTeamValue: number,
  secondTeamValue: number,
  isComplete: boolean
}
