import { Team } from "../types";
import { LOADING_TEAMS, LOADED_TEAMS } from "./actionTypes";

export const loadingTeamsAction = () => ({ type: LOADING_TEAMS });
export const loadedTeamsAction = (payload: Team[]) => ({ type: LOADED_TEAMS, payload });
