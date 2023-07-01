import Todo from './components/Todo-list';
import Timer from './components/Timer';
import React, { useState } from 'react';


function App() {
  let time = new Date().toLocaleTimeString();
  const [clock, setClock] = useState(time) ;
  
  const updateTime = () => {
      let newTime = new Date().toLocaleTimeString();
      setClock(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <Timer clock={clock}/>
      <Todo clock={ clock }/>
    </div>
  );
}

export default App;
