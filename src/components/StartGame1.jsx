import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="alt" />

      <div className='content'>
        <h1>DICE GAME</h1>
        <div className="btn">
        <Button onClick={toggle} >Play Now</Button>
        </div>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;

  .content h1{
    font-size: 96px;
  }

  .btn{
    display: flex;
    justify-content: end;
  }

`;
