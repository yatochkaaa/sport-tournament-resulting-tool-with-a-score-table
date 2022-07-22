import { MatchType, TeamName } from "../types";
import { LOADING_DATA, LOADED_TEAMS, LOADED_MATCHES } from "./actionTypes";

export const loadingDataAction = () => ({ type: LOADING_DATA });
export const loadedTeamsAction = (payload: TeamName[]) => ({ type: LOADED_TEAMS, payload }); 
export const loadedMatchesAction = (payload: MatchType[]) => ({ type: LOADED_MATCHES, payload }); 
