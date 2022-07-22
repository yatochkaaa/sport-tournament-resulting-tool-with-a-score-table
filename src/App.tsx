import React from 'react';
import { useDispatch } from 'react-redux';

import {
  loadingDataAction,
  loadedTeamsAction,
  loadedMatchesAction
} from './store/actionCreators';
import Table from './components/Table';
import ScoreControl from './components/ScoreControl';
import possibleMatches from './utils/possibleMatches';
import { MatchType, TeamName, Teams } from './types';

import './styles/main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [teamName, setTeamName] = React.useState<TeamName>('');
  const [teams, setTeams] = React.useState<Teams>([]);
  const [matches, setMatches] = React.useState<MatchType[]>([]);

  React.useEffect(() => {
    const savedTeams = localStorage.getItem('teams');
    const savedMatches = localStorage.getItem('matches');

    if (savedTeams && savedMatches) {
      dispatch(loadingDataAction());
      const parseSavedTeams = JSON.parse(savedTeams);
      const parseSavedMatches = JSON.parse(savedMatches);

      setTeams(parseSavedTeams);
      dispatch(loadedTeamsAction(parseSavedTeams));
      setMatches(parseSavedMatches);
      dispatch(loadedMatchesAction(parseSavedMatches));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  React.useEffect(() => {
    localStorage.setItem('matches', JSON.stringify(matches));
  }, [matches]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTeamName(value);
  }

  const addTeam = () => {
    if (teamName) {
      setTeams([ ...teams, {
          "name": teamName,
          "played": 0,
          "win": 0,
          "draw": 0,
          "lost": 0,
          "points": 0
        }
      ]);
      setMatches(possibleMatches(teamName, teams, matches));
      console.log(possibleMatches(teamName, teams, matches));
      setTeamName('');
    }
  }


  return (
    <div className="App">
      <div className='App__additionBar additionBar'>
        <input
          className='additionBar__input'
          type="text"
          placeholder='New team'
          value={teamName}
          onChange={handleChangeInput}
        />

        <button
          className='additionBar__button button'
          type='button'
          onClick={addTeam}
        >
          Add
        </button>
      </div>
      <Table teams={teams} />
      <ScoreControl
        teams={teams}
        setTeams={setTeams}
        matches={matches}
        setMatches={setMatches}
      />
    </div>
  );
}

export default App;
