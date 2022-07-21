import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingTeamsAction, loadedTeamsAction } from './store/actionCreators';
import { getTeams } from './store/selectors';
import Table from './components/Table';
import './styles/main.scss';
import { Team } from './types';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [teamList, setTeamList] = React.useState<Team[]>([]);
  const [team, setTeam] = React.useState<Team>();

  React.useEffect(() => {
    if (teamList.length) {
      dispatch(loadingTeamsAction());
      dispatch(loadedTeamsAction(teamList));
    }
  }, [dispatch, teamList]);

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
    </div>
  );
}

export default App;
