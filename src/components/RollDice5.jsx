import styled from 'styled-components'

const RollDice = ({currentDice,rollDice}) => {


    // const generateRandomNumber = (min,max) => {                        //generate random number
    //     return Math.floor(Math.random() * (max-min) + min);
    // };

    // const rollDice = () => {
    //     const randomNumber = generateRandomNumber(1,6);             
    //     setCurrentDice((prev)=>randomNumber)      //here we have map the setCurrentDice function to a random number          
    // }     

    // THE ABOVE 2 FUNCTIONS ARE BEEN EXPORTED TO GAME

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`