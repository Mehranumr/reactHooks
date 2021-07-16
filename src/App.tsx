import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateSimple from './components/UseStateSimple';
import UseStateWithObject from './components/UseStateWithObject';
import UseEffectSimple from './components/UseEffectSimple';
import UseEffectWithObject from './components/UseEffectWithObject';

function App() {
  return (
    <div className="App">
      <UseStateSimple />
      <hr />
      <UseStateWithObject />
      <hr />
      <UseEffectSimple />
      <hr />
      <UseEffectWithObject />
    </div>
  );
}

export default App;
