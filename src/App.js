import './App.css';
import TimeCard from './components/timecard/TimeCard';
import data from './data.json';
import { useEffect, useState } from 'react';

function App() {
  const [ appData, setAppData] = useState({timeframes: {daily: ""}});

  useEffect(() => {
    setAppData(data[0]);
    console.log(data);
  }, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
