import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateSimple from './components/UseStateSimple';
import UseStateWithObject from './components/UseStateWithObject';
import UseEffectSimple from './components/UseEffectSimple';

function App() {
  return (
    <div className="App">
      <UseStateSimple />
      <hr />
      <UseStateWithObject />
      <hr />
      <UseEffectSimple />
    </div>
  );
}

export default App;
