import React from "react";
import { Team } from "../types";

interface Props {
  teamList: Team[];
}

const ScoreControl: React.FC<Props> = ({ teamList }) => {

  const possibleMatches = (): Team[][] => {
    const matches = [];

    for (let firstTeam = 0; firstTeam < teamList.length; firstTeam++) {
      for (let secondTeam = firstTeam + 1; secondTeam < teamList.length; secondTeam++) {
        matches.push([teamList[firstTeam], teamList[secondTeam]]);
      }
    }

    return matches;
  }

  return (
    <div>
      {possibleMatches().map((matchMember) => {
        return (
          <div key={`${matchMember[0]}/${matchMember[1]}`}>
            {`${matchMember[0]} : ${matchMember[1]}`}
          </div>
        )
      })}
    </div>
  );
}

export default ScoreControl;
