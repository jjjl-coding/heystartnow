import styled from "styled-components";
import Modal from "react-modal";
import { getRandomNumber } from "./utils/numberUtils";
import { getResult } from "./gamePolicy/getResult";
import { useState, useEffect, useRef } from "react";
import { Card } from "./Card";

let randomNumber = getRandomNumber();
let count = 1;

function App() {
  const [inputFocus, setInputFocus] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const [cardListValues, setCardListValues] = useState([]);
  const [gamePlaying, setGamePlaying] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cardListValues]);

  function oninput(e) {
    let number = Number(e.target.value);
    if (e.target.value.length > 1) {
      number = e.target.value[e.target.value.length - 1];
    }
    changeInputValue(number, inputFocus);
  }

  function nextFocus() {
    if (inputFocus === 2) {
      return setInputFocus(0);
    }
    setInputFocus(inputFocus + 1);
  }

  function changeInputValue(number, index) {
    const clonedArray = [...inputValues];
    clonedArray[index] = number;
    setInputValues(clonedArray);
  }

  function changeInputfocus(e) {
    setInputFocus(Number(e.target.id));
  }

  function confirmButtonClickHandler() {
    const result = getResult(inputValues, randomNumber);
    setCardListValues([...cardListValues, { inputValues, result: result }]);
    if (result.victory === true) {
      setGamePlaying(true);
    }
  }
  function modalButtonClickHandler() {
    setGamePlaying(false);
    setCardListValues([]);
    setInputValues(["", "", ""]);
    setInputFocus(0);
    randomNumber = getRandomNumber();
    count++;
  }
  return (
    <Wrapper>
      <ContentsWrapper>
        {/* 모달입니다 */}
        <Modal isOpen={gamePlaying} style={modalstyle}>
          와! 우승!
          <button
            onClick={() => {
              modalButtonClickHandler();
            }}
          >
            다시하기
          </button>
        </Modal>
        <Header>
          <h1>제 {count}회 숫자 야구 게임</h1>
          <h1> {randomNumber}</h1>
        </Header>
        <Main>
          {/* 입력칸 3개 생성 */}
          <InputWrapper>
            {[0, 1, 2].map((id) => {
              return (
                <InputBox
                  id={id}
                  onFocus={changeInputfocus}
                  type="number"
                  onInput={oninput}
                  value={inputValues[id]}
                ></InputBox>
              );
            })}
          </InputWrapper>
          <CardList>
            {/* 입력한 숫자에 대한 결과 카드 */}
            {cardListValues.map((item) => {
              return <Card item={item}></Card>;
            })}
            <div ref={bottomRef} />
          </CardList>
        </Main>
        <Footer>
          {/* 숫자 버튼 */}
          <div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
              return (
                <NumerButton
                  onClick={() => {
                    changeInputValue(number, inputFocus);
                    nextFocus();
                  }}
                >
                  {number}
                </NumerButton>
              );
            })}
            {/* 입력 버튼 */}
            <ConfirmButton
              onClick={() => {
                confirmButtonClickHandler();
              }}
            >
              입력
            </ConfirmButton>
          </div>
        </Footer>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;

//모달
const modalstyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "80px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    padding: "20px",
  },
};
//스타일
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  width: 500px;
  height: 100%;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #cdcdcd;
`;

const Header = styled.div`
  width: 100%;
  /* height:15%; */

  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 100%;
  height: 400px;
  //background-color: red;
`;

const Footer = styled.div`
  width: 100%;
  height: 160px;
  //background-color: green;
  /* height:25%; */
  /* border:1px solid blue; */
`;

const NumerButton = styled.button`
  font-size: 30px;
  width: 17%;
  height: 80px;
  border-radius: 5px;
  //background-color: blue;
  //color: #fff;
  padding: 10px;
`;

const ConfirmButton = styled.button`
  font-size: 20px;
  width: 15%;
  height: 80px;

  border-radius: 5px;
  //background-color: red;
  //color: #fff;
  padding: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
`;

const InputBox = styled.input`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 50px;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :focus {
    outline: none;
  }
`;

const CardList = styled.div`
  /* float: "left";
  clear: "both"; */
  display: grid;
  width: 100%;
  height: 300px;
  //background-color: salmon;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: overlay;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.8);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
  }
`;
