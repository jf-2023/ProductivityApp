import Nav from './components/Navbar';
import Todo from './components/Todo-list';
import Timer from './components/Timer';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Todo />
      <Timer />
    </div>
  );
}

export default App;
