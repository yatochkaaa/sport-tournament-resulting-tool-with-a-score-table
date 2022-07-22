import { MatchesType, TeamName, Teams } from '../types/index';

const possibleMatches = (teamName: TeamName, teams: Teams, matches: MatchesType): MatchesType => {
  const newMatches = teams.map(team => {
    return ({
      firstTeam: teamName,
      firstTeamValue: 0,
      secondTeam: team.name,
      secondTeamValue: 0,
      isComplete: false
    });
  });

  return [...matches, ...newMatches];
};

export default possibleMatches;
