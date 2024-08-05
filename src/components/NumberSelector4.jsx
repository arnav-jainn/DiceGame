import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {

    const arrNumber=[1,2,3,4,5,6]  //creating of array

    const NumberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError("");
    }

  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className="flex">
        {                                       // using values of array with help of a loop
            arrNumber.map((value,i)=>(
                <Box
                key={i}
                onClick={()=>NumberSelectorHandler(value)}          //()=> is used when we need to pass value to a function
                                                                // setSelectedNumber(value) is setting the value of array clicked in setSelectNumber function
                isSelected={value==selectedNumber}              // using props to apply css based on condition that is the value and selected number are same then only css will be applied
                > {value}</Box>
            ))
        }
        </div>
        <p>Select Number</p>

    </NumberSelectorContainer>
  
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end ;
    gap: 20px;

    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        
    }

    .error{
        color: red;
        line-height: 10px;
     }

`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    background-color: ${({isSelected})=> (isSelected?"black":"white")};    /*here the css is applied based on some condition using props */ 
    color: ${({isSelected})=> (!isSelected?"black":"white")};
`