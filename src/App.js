import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CalendarNav from './components/CalendarNav';
import Week from "./components/WeekDays";
import Month from "./components/Month";
import Calendar from "./components/Calendar";


function App() {
  return (
      <>

    <Calendar mode="month"/>
    </>
  );
}

export default App;
