import { Data, Team, } from "../types";
import { LOADING_DATA, SET_DATA } from "./actionTypes";

export const loadingDataAction = () => ({ type: LOADING_DATA });
export const setDataAction = (payload: Data) => ({ type: SET_DATA, payload }); 
export const setTeamAction = (payload: Team) => ({type: SET_DATA, payload});
