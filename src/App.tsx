import React from 'react';
import Table from './components/Table';
import './styles/main.scss';

const App: React.FC = () => {
  const [teamList, setTeamList] = React.useState<string[]>([]);
  const [team, setTeam] = React.useState<string>();

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
