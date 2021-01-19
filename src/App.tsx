import React from 'react';
import './App.scss';
import { Attendees } from './components/Attendees';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Accessability Training</h1>
      </header>
      <Attendees></Attendees>
    </div>
  );
}

export default App;
