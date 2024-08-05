import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame1'
import Game from './components/Game2';

function App() {

  const [isGameStarted,setIsGameStarted]=useState(false);
                // this is used to toggle btwn diff components on a click in StartGame.jsx
  const toggleGame = ()=>{

    setIsGameStarted((prev)=>!prev);
  };

  return (
    <>
      {isGameStarted ? <Game/> : <StartGame toggle={toggleGame}/>}
    </>
  )
}

export default App


//App.jsx  -  {use of usestate}
//NumberSelector  -  {array creation} {using values of array with loop} {more imp concept related to css}