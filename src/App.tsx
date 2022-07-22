import React from 'react';
import { useDispatch } from 'react-redux';

import { loadingDataAction, setDataAction } from './store/actionCreators';
import Table from './components/Table';
import ScoreControl from './components/ScoreControl';
import possibleMatches from './utils/possibleMatches';
import { MatchesType, TeamName, Teams } from './types';

import './styles/main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [teamName, setTeamName] = React.useState<TeamName>('');
  const [teams, setTeams] = React.useState<Teams>([]);
  const [matches, setMatches] = React.useState<MatchesType>([]);

  React.useEffect(() => {
    const savedTeams = localStorage.getItem('teams');
    const savedMatches = localStorage.getItem('matches');

    if (savedTeams && savedMatches) {
      dispatch(loadingDataAction());
      const parseSavedTeams = JSON.parse(savedTeams);
      const parseSavedMatches = JSON.parse(savedMatches);

      setTeams(parseSavedTeams);
      setMatches(parseSavedMatches);
      dispatch(setDataAction({
        teams: parseSavedTeams,
        matches: parseSavedMatches,
      }));
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
      const newTeam = {
        "name": teamName,
        "played": 0,
        "win": 0,
        "draw": 0,
        "lost": 0,
        "points": 0
      };

      setTeams([ ...teams, newTeam]);
      setMatches(possibleMatches(teamName, teams, matches));
      setTeamName('');
      dispatch(setDataAction({
        teams: [ ...teams, newTeam],
        matches: possibleMatches(teamName, teams, matches) }));
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
