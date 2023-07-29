import Expenses from './components/Expenses';
import Goals from './components/Goals';
import Pomodoro from './components/Pomodoro';
import Stones from './components/Habits';
import Todo2 from './components/Todo-list';
import React, { useState } from 'react';

function App() {
  return (
    <div className="container">
      <div className="item item-1"> <Todo2 /> </div>
      <div className="item item-2"> <Goals /> </div>
      <div className="item item-3"> <Expenses /> </div>
      <div className="item item-4"> <Stones /> </div>
      <div className="item item-5"> <Pomodoro /> </div>
    </div>
  );
}

export default App;