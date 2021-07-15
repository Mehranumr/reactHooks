import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseStateSimple';
import UseStateWithObject from './components/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseStateWithObject />
    </div>
  );
}

export default App;
