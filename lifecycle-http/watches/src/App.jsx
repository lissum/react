import React, { useState } from 'react';
import ClockForm from './components/ClockForm';
import ClockList from './components/ClockList';
import './App.css';

function App() {
  const [clocks, setClocks] = useState( [] );

  const addClock = ( name, offset ) => {
    setClocks( [...clocks, {id: Date.now(), name, offset: parseInt( offset )}] );
  };

  const removeClock = ( id ) => {
    setClocks( clocks.filter( clock => clock.id !== id ) );
  };

  return (
      <div className="App">
        <h1>Мировые часы</h1>
        <ClockForm onAdd={addClock}/>
        <ClockList clocks={clocks} onRemove={removeClock}/>
      </div>
  );
}

export default App;