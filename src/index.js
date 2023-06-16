import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './zebra';


const root = ReactDOM.createRoot(document.getElementById('root'));



function Page() {
  return (
    <div>
      <App />
    </div>
    )
}

root.render(<Page />,);
