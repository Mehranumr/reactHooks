import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateSimple from './components/UseStateSimple';
import UseStateWithObject from './components/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <UseStateSimple />
      <UseStateWithObject />
    </div>
  );
}

export default App;
