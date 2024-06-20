import './App.css';
import Grid from './components/grid/Grid';
import TimeCard from './components/timecard/TimeCard';
import AvatarCard from './components/avatarcard/AvatarCard';
import data from './data.json';
import { useEffect, useState } from 'react';

function App() {
  const [ appData, setAppData] = useState([]);
  const [ timeframe, setTimeframe ] = useState('weekly');

  function changeTimeframe(timeframe){
    setTimeframe(timeframe);
  }

  useEffect(() => {
    setAppData(data);
  }, [])

  return (
    <div className="App">
      <Grid>
        <AvatarCard currentTimeframe={timeframe} changeTimeframe={changeTimeframe}/>

        {appData && appData.map((item) => <TimeCard key={item.title} title={item.title} time={item.timeframes} timeframe={timeframe}/>)}
      </Grid>
    </div>
  );
}

export default App;
