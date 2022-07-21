import React from "react";
import classNames from "classnames";

import { COL } from "../types";
import '../styles/main.scss';

interface Props {
  teamList: string[];
}

const Table: React.FC<Props> = ({ teamList }) => {
  return (
    <table className="table">
      <thead className={classNames("table__head", { "table__head--emptyList": !teamList.length})}>
        <tr>
          <th scope="col">{COL.PLACE}</th>
          <th scope="col">{COL.TEAM}</th>
          <th scope="col">{COL.PLAYED}</th>
          <th scope="col">{COL.WIN}</th>
          <th scope="col">{COL.DRAW}</th>
          <th scope="col">{COL.LOST}</th>
          <th scope="col">{COL.POINTS}</th>
        </tr>
      </thead>
      <tbody className="table__body">
        
          {teamList.map((team, index) => {
            return (
              <>
                <tr className="table__row">
                  <th className="table__header" scope="row">{index + 1}</th>
                  <td className="table__data">{team}</td>
                  <td className="table__data">0</td>
                  <td className="table__data">0</td>
                  <td className="table__data">0</td>
                  <td className="table__data">0</td>
                  <td className="table__data">0</td>
                </tr>
              </>
            )
          })}
      </tbody>
    </table>
  )
}

export default Table;