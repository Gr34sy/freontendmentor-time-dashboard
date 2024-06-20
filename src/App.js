import './App.css';
import Grid from './components/grid/Grid';
import AvatarCard from './components/avatarcard/AvatarCard';
import data from './data.json';
import { useEffect, useState } from 'react';

function App() {
  const [ appData, setAppData] = useState({timeframes: {daily: ""}});
  const [ timeframe, setTimeframe ] = useState('weekly');

  function changeTimeframe(timeframe){
    setTimeframe(timeframe);
  }

  useEffect(() => {
    setAppData(data[0]);
    console.log(data);
  }, [])

  return (
    <div className="App">
      <Grid>
        <AvatarCard currentTimeframe={timeframe} changeTimeframe={changeTimeframe}/>
      </Grid>
    </div>
  );
}

export default App;
