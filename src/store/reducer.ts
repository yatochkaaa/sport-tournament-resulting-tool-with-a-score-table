import { AnyAction } from 'redux';
import { MatchType, Teams } from '../types';
import { LOADING_DATA, LOADED_TEAMS, LOADED_MATCHES } from './actionTypes';

export type RootState = {
  loading: boolean;
  teams: Teams;
  matches: MatchType[];
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
    case LOADED_TEAMS: {
      return { ...state, teams: action.payload }
    }
    case LOADED_MATCHES: {
      return { ...state, loading: false, matches: action.payload }
    }

    default:
      return state;
  }
};

export default rootReducer;
