import styled from "styled-components";
import Modal from "react-modal";
import { getRandomNumberList } from "./utils/numberUtils";
import { getResult } from "./gamePolicy/getResult";
import React, { useState } from "react";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  const maxLength = 5;
  const [inputFocus, setInputFocus] = useState(0);
  const [inputValues, setInputValues] = useState<number[]>([]);
  const [cardListValues, setCardListValues] = useState<Array<object>>([]);
  const [gameCount, setGameCount] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number[]>(
    getRandomNumberList(maxLength)
  );

  function nextFocus() {
    if (inputFocus === maxLength) {
      return setInputFocus(0);
    }
    setInputFocus(inputFocus + 1);
  }

  function changeInputValue(number: number) {
    const clonedArray = [...inputValues];
    clonedArray[inputFocus] = number;
    setInputValues(clonedArray);
  }

  function confirmButtonClickHandler() {
    const result = getResult(inputValues, randomNumber);
    setCardListValues([...cardListValues, { inputValues, result: result }]);
    if (result.victory === true) {
      setGameEnd(true);
    }
  }
  function ClearGame() {
    setGameEnd(false);
    setCardListValues([]);
    setInputValues([]);
    setInputFocus(0);
    setRandomNumber(getRandomNumberList(maxLength));
    setGameCount(gameCount + 1);
  }

  return (
    <Wrapper>
      <ContentsWrapper>
        {/* 모달입니다 */}
        <Modal isOpen={gameEnd} style={modalstyle}>
          와! 우승!
          <button
            onClick={() => {
              ClearGame();
            }}
          >
            다시하기
          </button>
        </Modal>
        <Header gameCount={gameCount} />
        <Main
          changeInputValue={changeInputValue}
          setInputFocus={setInputFocus}
          inputValues={inputValues}
          cardListValues={cardListValues}
          maxLength={maxLength}
        />
        <Footer
          changeInputValue={changeInputValue}
          nextFocus={nextFocus}
          confirmButtonClickHandler={confirmButtonClickHandler}
        />
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;

//모달스타일
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
