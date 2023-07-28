import Expenses from './components/Expenses';
import Goals from './components/Goals';
import Pomodoro from './components/Pomodoro';
import Stones from './components/Habits';
import Todo from './components/Todo-list';
import React, { useState } from 'react';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="component-container todo-container">
            <Todo />
          </div>
        </div>
      </div>
      <div className="row row-cols-3">
        <div className="col-3">
          <div className="component-container stones-containe full-height">
            <Goals />
          </div>
        </div>
        <div className="col-3">
          <div className="component-container goals-container">
            <Expenses />
          </div>
        </div>
        <div className="col-6">
          <div className="component-container expenses-container">
            <Stones />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="component-container pomodoro-container half-height">
            <Pomodoro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;