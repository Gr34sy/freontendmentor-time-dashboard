import './App.css';
import TimeCard from './components/timecard/TimeCard';
import data from './data.json';
import { useEffect, useState } from 'react';

function App() {
  const [ appData, setAppData] = useState([]);

  useEffect(() => {
    setAppData(data[0]);
    console.log(data);
  }, [])

  return (
    <div className="App">
      <TimeCard title={appData.title} timeframes={appData.timeframes}/>
    </div>
  );
}

export default App;
