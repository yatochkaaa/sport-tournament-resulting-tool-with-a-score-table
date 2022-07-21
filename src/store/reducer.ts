import { AnyAction } from 'redux';
import { Team } from '../types';
import { LOADING_TEAMS, LOADED_TEAMS } from './actionTypes';

export type RootState = {
  loading: boolean;
  teams: Team[]
};

const initialState: RootState = {
  loading: false,
  teams: []
};

const rootReducer = (state = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case LOADING_TEAMS:
      return { loading: true, teams: [] }
    case LOADED_TEAMS: {
      return { ...state, loading: false, teams: action.payload }
    }

    default:
      return state;
  }
};

export default rootReducer;
