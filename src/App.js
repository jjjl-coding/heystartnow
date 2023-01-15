import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import {getRandomNumber} from './utils/numberUtils';
import {getResult} from './gamePolicy/getResult';
import { useEffect, useState } from 'react';
import {Card} from './Card'

const randomNumber = getRandomNumber()

function App() {
  const [inputFocus,setInputFocus] = useState()
  const [inputValues,setInputValues] = useState([0,0,0])

  const [cardListValues,setResultValues] = useState([])


  function oninput(e){
    if(e.target.value.length > 1){
      const clonedArray = [...inputValues]
      console.log(clonedArray)
      clonedArray[inputFocus] = Number(e.target.value.slice(1))
      setInputValues(clonedArray)
    }
  }
  function changeInputValue(number,index){
    const clonedArray = [...inputValues]
    clonedArray[index] = number
    setInputValues(clonedArray)    
  }
  function changeInputfocus(e){
    setInputFocus(Number(e.target.id))
  }
  return (
    <Wrapper>
      <ContentsWrapper>
        <Header>
          <h1>숫자 야구 게임 {randomNumber}</h1>
        </Header>
        <Main>
         <InputWrapper>
         {
          [0,1,2].map(id=>{
            return <InputBox id={id} onFocus={changeInputfocus} type="number" onInput={oninput} value={inputValues[id]}></InputBox>
          })
         }
         </InputWrapper>
         <CardList>
          {cardListValues.map(item => {
            return <Card item={item}></Card>
          })}
         </CardList>
        </Main>
        <Footer>
          {/* 숫자 */}
          <div>
            {[0,1,2,3,4,5,6,7,8,9].map(number=>{
              return <NumerButton onClick={()=>{
                changeInputValue(number,inputFocus)
              }
              }>{number}</NumerButton>
            })}
            <ConfirmButton onClick={()=>{
              getResult(inputValues,randomNumber)
              setResultValues([...cardListValues, {inputValues, result : getResult(inputValues,randomNumber)}])
            }}>입력</ConfirmButton>
          </div>
        </Footer>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  
  display:flex;
  flex-direction: row;
  justify-content: center;

  
`

const ContentsWrapper = styled.div `
  width:500px;
  height:100%;
  padding:0 10px;

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border:1px solid #cdcdcd;
`

const Header = styled.div `
  width:100%;
  /* height:15%; */
  
  display:flex;
  justify-content: center;
`

const Main = styled.div `
  width:100%;
  height:400px;
  background-color: red;
`

const Footer = styled.div `
  width:100%;
  height:100px;
  background-color: green;
  /* height:25%; */
  /* border:1px solid blue; */
`

const NumerButton = styled.button `
  border-radius: 5px;
  background-color: blue;
  padding:10px;
`

const ConfirmButton = styled.button `
  border-radius: 5px;
  background-color: red;
  padding:10px;
`

const InputWrapper = styled.div `
  width:100%;

  display:flex;
  justify-content:space-around;
`

const InputBox = styled.input `
  width:50px;
  height:50px;
  border:1px solid black;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

const CardList = styled.div `
  height:300px;
  background-color: salmon;
`

