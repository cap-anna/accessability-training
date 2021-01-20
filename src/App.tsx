import React, { useEffect } from 'react';
import './App.scss';
import { Attendees, useMove } from './components/Attendees';

function App() {
  const {handleMouseMove, x , y} = useMove()

  //console.log(x, y)

  const trans = 'translate(' + x + 'px, ' + y + 'px)'
  //const trans = 'translate(' + 10 + 'px, ' + 20 + 'px)'
  const style = {
      transform: trans
  }

  console.log(style)

  useEffect(() => {
    const interval = setInterval(() => {
      handleMouseMove()
    }, 2000)
  })

  return (
    <div>
    <div className="App">
      
      <header>
        <h1>Accessability Training</h1>
      </header>
      <Attendees ></Attendees>
    </div>
    <svg viewBox="11.8 9 16 22"><path d="M20,21l4.5,8l-3.4,2l-4.6-8.1L12,29V9l16,12H20z"
                style={style}></path></svg> 
    </div>
  );
}

export default App;
