import React from 'react';
import './App.css';
import ComputerClock from './components/Clock/ComputerClock.js'
import WorldClock from './components/Clock/WorldClock.js'

function App(props) {
  return (<div>
    <h1>Exemplo de estado de um componente react</h1>
    <ComputerClock />
    <h1>
      Consultando da API: worldClockapi
    </h1>
    <WorldClock/>
  </div>);
}

export default App;