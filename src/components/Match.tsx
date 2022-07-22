
import React from 'react';
import { MatchType, Teams } from '../types';

interface Props {
  match: MatchType;
  teams: Teams;
  setTeams: React.Dispatch<React.SetStateAction<Teams>>;
  matches: MatchType[];
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>;
}

const Match: React.FC<Props> = ({ match, teams, setTeams, matches, setMatches }) => {
  const [firstTeamValue, setFirstTeamValue] = React.useState<number>(match.firstTeamValue || 0);
  const [secondTeamValue, setSecondTeamValue] = React.useState<number>(match.secondTeamValue || 0);
  const [isComplete, setIsComplete] = React.useState<boolean>(match.isComplete || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, callback: React.Dispatch<number>) => {
    const { value } = e.target;

    callback(+value);
  }

  const addResult = () => {
    const firstTeam = teams.find(team => team.name === match.firstTeam);
    const secondTeam = teams.find(team => team.name === match.secondTeam);

    if (firstTeam && secondTeam && firstTeamValue !== undefined && secondTeamValue !== undefined) {
      match.firstTeamValue = firstTeamValue;
      match.secondTeamValue = secondTeamValue;
      match.isComplete = true;

      if (firstTeamValue > secondTeamValue) {
        firstTeam.played += 1;
        firstTeam.win += 1;
        firstTeam.points += 3;

        secondTeam.played +=1;
        secondTeam.lost += 1;
      } else if (firstTeamValue < secondTeamValue) {
        secondTeam.played += 1;
        secondTeam.win += 1;
        secondTeam.points += 3;

        firstTeam.played +=1;
        firstTeam.lost += 1;
      } else if (firstTeamValue === secondTeamValue) {
        firstTeam.played += 1;
        firstTeam.draw += 1;
        firstTeam.points += 1;

        secondTeam.played += 1;
        secondTeam.draw += 1;
        secondTeam.points += 1;
      }

      setTeams([...teams]);
      setMatches([...matches])
      setIsComplete(true);
    }
  }

  console.log('matches', matches);
  return (
    <>
      {match.firstTeam}
      <input
        className="scoreControl__teamValue"
        type="number"
        value={firstTeamValue}
        onChange={(e) => handleChange(e, setFirstTeamValue)}
        disabled={isComplete}
      />
      :
      <input
        className="scoreControl__teamValue"
        type="number"
        value={secondTeamValue}
        onChange={(e) => handleChange(e, setSecondTeamValue)}
        disabled={isComplete}
      />
      {match.secondTeam}
      <button
        className="scoreControl__button button"
        type="button"
        onClick={addResult}
        disabled={isComplete}
      >
        Add
      </button>
    </>
  );
}

export default Match;