import { RootState } from "./reducer";

export const getLoading = (state: RootState) => state.loading;
export const getTeams = (state: RootState) => state.teams;
export const getMatches = (state: RootState) => state.matches;
