import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`

export const InputCard = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 30px 20px 30px 20px;
  border-radius: 15px;
  background-color: #475569;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardHeading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 30px 0px;
  font-family: 'Roboto';
`

export const CardDescription = styled.p`
  text-align: center;
  color: #f8fafc;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 25px 0px;
  font-family: 'Roboto';
`

export const Input = styled.input`
  width: 100%;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  padding: 12px 0px 15px 12px;
  border: 0px solid;
  border-radius: 5px;
  margin: 0px 15px 10px 15px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #000000;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  text-align: center;
  font-size: 14px;
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
  font-family: 'Roboto';
`
