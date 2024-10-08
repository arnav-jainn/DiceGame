import styled from 'styled-components'

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled.button`

  background-color: white;
  color: black;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid black;
  transition: 0.4s background ease-in;
  cursor: pointer;
  
  &:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
