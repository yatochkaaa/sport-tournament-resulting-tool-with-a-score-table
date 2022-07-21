import React from 'react';
import { useDispatch } from 'react-redux';

import { loadingTeamsAction, loadedTeamsAction } from './store/actionCreators';
import Table from './components/Table';
import ScoreControl from './components/ScoreControl';
import { Team } from './types';

import './styles/main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [teamList, setTeamList] = React.useState<Team[]>([]);
  const [team, setTeam] = React.useState<Team>();

  React.useEffect(() => {
    const savedTeams = localStorage.getItem('teams');

    if (savedTeams) {
      dispatch(loadingTeamsAction());
      const parseSavedTeams = JSON.parse(savedTeams);

      setTeamList(parseSavedTeams);
      dispatch(loadedTeamsAction(parseSavedTeams));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teamList));
  }, [teamList]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const teamName = e.target.value;

    setTeam(teamName);
  }

  const addTeam = () => {
    team && setTeamList([...teamList, team]);
  }

  return (
    <div className="App">
      <div className='App__additionBar additionBar'>
        <input
          className='additionBar__input'
          type="text"
          placeholder='New team'
          value={team}
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
      <Table teamList={teamList} />
      <ScoreControl teamList={teamList} />
    </div>
  );
}

export default App;
