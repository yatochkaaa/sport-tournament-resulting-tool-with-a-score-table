import React from "react";
import classNames from "classnames";

import { COL, Teams } from "../types";
import '../styles/main.scss';

interface Props {
  teams: Teams;
}

const Table: React.FC<Props> = ({ teams }) => {
    return (
    <table className="table">
      <thead className={classNames("table__head", { "table__head--emptyList": !teams.length})}>
        <tr>
          {Object.values(COL).map(col => {
            return <th scope="col" key={col}>{col}</th>;
          })}
        </tr>
      </thead>
      <tbody className="table__body">
        {teams
          .sort((team1, team2) => team2.points - team1.points)
          .map((team, index) => {
            return (
              <tr className="table__row" key={team.name}>
                <th className="table__header" scope="row">{index + 1}</th>
                <td className="table__data">{team.name}</td>
                <td className="table__data">{team.played}</td>
                <td className="table__data">{team.win}</td>
                <td className="table__data">{team.draw}</td>
                <td className="table__data">{team.lost}</td>
                <td className="table__data">{team.points}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default Table;
