import React from "react";

import Match from "./Match";
import { Teams, MatchType } from "../types";

interface Props {
  teams: Teams;
  setTeams: React.Dispatch<React.SetStateAction<Teams>>;
  matches: MatchType[];
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>;
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
