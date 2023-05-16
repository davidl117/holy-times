import './App.css';
import React from 'react';
import { HebcalApi } from './APICall/HebcalApi';

function App() {
  return (
    <div>
      <h1>Holy Times</h1>
      <HebcalApi/>  
    </div>
    
  );
}

export default App;
