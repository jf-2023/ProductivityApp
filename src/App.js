import './App.css';
import Nav from './components/Navbar';
import Main from './components/Main';
import Timer from './components/Timer';
import React, { useState, useEffect } from 'react';

function App() {
 const [newDay, setNewDay] = useState('12:00:00 AM')

useEffect(() => {
  const timer = setInterval(() =>{
      const currentTime = new Date().toLocaleTimeString()
      if (currentTime == newDay){
        handleResetTasks();
      }
  }, 1000);

  return () => {
    clearInterval(timer);
  };

}, [newDay]);

const handleResetTasks = () => {
  const updatedTasks = tasks.map((task) => {
    return { ...task, complete: false };
  });
};

  return (
    <div className="App">
      <Nav />
      <Main />
      <Timer />
    </div>
  );
}

export default App;
