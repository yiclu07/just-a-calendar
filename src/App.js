import './App.css';
import { useState } from 'react';
import DatesContainer from './components/DatesContainer/DatesContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Weekdays from './components/Weekdays/Weekdays';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <div className="calendar">
        <NavigationBar date={date} onDateChange={setDate}/>
        <Weekdays />
        <DatesContainer date={date}/>
      </div>
    </div>
  );
}

export default App;
