import Stones from './components/Habits';
import Todo from './components/Todo-list';
import React, { useState } from 'react';



function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Component 1 */}
          {/* Add your component content here */}
        </div>
        <div className="col-md-6">
          {/* Component 2 */}
          {/* Add your component content here */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          {/* Component 3 */}
          {/* Add your component content here */}
        </div>
        <div className="col-md-4">
          {/* Component 4 */}
          {/* Add your component content here */}
        </div>
        <div className="col-md-4">
          {/* Component 5 */}
          {/* Add your component content here */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Component 6 */}
          {/* Add your component content here */}
        </div>
      </div>
    </div>
  );
}

export default App;