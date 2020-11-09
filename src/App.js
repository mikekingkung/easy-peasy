import React from 'react';
import ToDos from './components/ToDos';
import AddTodo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className="container">
      <ToDos/>
      <AddTodo/>
    </div>
  );
}

export default App;
