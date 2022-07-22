import { MatchType, TeamName, Teams } from '../types/index';

const possibleMatches = (teamName: TeamName, teams: Teams, matches: MatchType[]): MatchType[] => {
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