import React from "react";

import Match from "./Match";
import { Teams, MatchesType } from "../types";

interface Props {
  teams: Teams;
  setTeams: React.Dispatch<React.SetStateAction<Teams>>;
  matches: MatchesType;
  setMatches: React.Dispatch<React.SetStateAction<MatchesType>>;
}

const ScoreControl: React.FC<Props> = ({ teams, setTeams, matches, setMatches }) => {
  return (
    <div className="scoreControl">
      {matches.map((match, index) => {
        return (
          <div className="scoreControl__match" key={index}>
            <Match
              match={match}
              teams={teams} 
              setTeams={setTeams}
              matches={matches}
              setMatches={setMatches}
            />
          </div>
        )
      })}
    </div>
  );
}

export default ScoreControl;
