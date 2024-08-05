import React from 'react'
import TotalScore from './TotalScore3'
import NumberSelector from './NumberSelector4'
import styled from 'styled-components'
import RollDice from './RollDice5'
import { useState } from "react"
import { Button, OutlineButton } from '../styled/Button'
import Rules6 from './Rules6'


const Game = () => {

  const [selectedNumber,setSelectedNumber]=useState(0);  //useState used in NumberSelector

  const[currentDice,setCurrentDice]=useState(1);        //useState used in RollDice

  const [score,setScore]=useState(0);
  
  const [error,setError]=useState(" ");
  
  const [showRules,setShowRules]=useState(false);
  



  const generateRandomNumber = (min,max) => {                       
    return Math.floor(Math.random() * (max-min) + min);
};

const rollDice = () => {
  if(!selectedNumber){                // if the number is not selected dice wont roll and score wont change
    setError("You have not selected any number")
    return;
  }                   
    const randomNumber = generateRandomNumber(1,7);             
    setCurrentDice((prev)=>randomNumber);


    
    if(selectedNumber==randomNumber){                   //this is used to increase the score based on condition if selected number and dice number(random number) match
      setScore((prev) => prev+randomNumber);
    }else{
      setScore((prev) => prev-2);
    }

    setSelectedNumber(undefined);                 //after comparing it will set the value of selected number again to undefined

}

const resetScore =()=>{
  setScore(0);
}


  return (
    <MainContainer>
        <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={()=>setShowRules((prev) => !prev)}>{
              showRules ? "Hide " : "Show "
            } Rules</Button>
        </div>

        {showRules && <Rules6/>}
    </MainContainer>
  )
}

export default Game

const MainContainer = styled.main`
padding-top: 50px;
    .top-section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
`