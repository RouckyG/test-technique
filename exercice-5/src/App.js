import React from 'react';
import './App.css';
import KeyBoard from './components/KeyBoard';
import Expression from './components/Expression';

function App() {
  return (
    <div className="App">
      <div className='calculator'>
        <Expression/>
        <KeyBoard/>
      </div>
    </div>
  );
}

export default App;
