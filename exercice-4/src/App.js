import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';

function App() {
  return (
    <div className="App">
      <Form/>
      <div className="todoLists">
        <TodoList/>
        <CompletedTodos/>
      </div>
    </div>
  );
}

export default App;
