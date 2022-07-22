import { AnyAction } from 'redux';
import { MatchesType, Teams } from '../types';
import { LOADING_DATA, SET_DATA, SET_TEAM } from './actionTypes';

export type RootState = {
  loading: boolean;
  teams: Teams;
  matches: MatchesType;
};

const initialState: RootState = {
  loading: false,
  teams: [],
  matches: []
};

const rootReducer = (state = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case LOADING_DATA:
      return { loading: true, teams: [], matches: [] }
    case SET_DATA: {
      return { ...state, loading: false, teams: action.payload.teams, matches: action.payload.matches }
    }
    case SET_TEAM: {
      return { ...state, loading: false, teams: action.payload.teams, matches: action.payload.matches }
    }

    default:
      return state;
  }
};

export default rootReducer;
