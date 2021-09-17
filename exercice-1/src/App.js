import React from 'react';
import TextField from './components/TextField';
import ToggleButton from './components/ToggleButton';
import State from './components/State';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToggleButton/>
      <TextField/>
      <State/>
    </div>
  );
}

export default App;
