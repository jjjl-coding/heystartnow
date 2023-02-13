import styled from "styled-components";
import Modal, { Styles } from "react-modal";
import { getRandomNumberList } from "./utils/numberUtils";
import { getResult } from "./gamePolicy/getResult";
import React, { useState, useEffect } from "react";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  //상태,설정값
  const [maxLength, setMaxLength] = useState<number>(3);
  const [inputFocus, setInputFocus] = useState<number>(0);
  const [inputValues, setInputValues] = useState<(number | string)[]>(
    Array.from({ length: maxLength }, () => "")
  );
  const [gameCount, setGameCount] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [gameLengthSet, setGameLengthSet] = useState(true);
  const [randomNumber, setRandomNumber] = useState<number[]>(
    getRandomNumberList(maxLength)
  );
  const [cardListValues, setCardListValues] = useState<Array<object>>([]);
  //함수
  function nextFocus() {
    if (inputFocus === maxLength - 1) {
      return setInputFocus(0);
    }
    setInputFocus(inputFocus + 1);
  }

  useEffect(() => {
    setRandomNumber(getRandomNumberList(maxLength));
    setInputValues(Array.from({ length: maxLength }, () => ""));
  }, [maxLength]);

  function changeInputValue(number: number | string) {
    const clonedArray = [...inputValues];
    clonedArray[inputFocus] = number;
    setInputValues(clonedArray);
  }

  async function confirmButtonClickHandler() {
    const result = getResult(inputValues, randomNumber);
    setCardListValues([...cardListValues, { inputValues, result: result }]);
    if (result.victory === true) {
      await new Promise((resolve, rejects) => {
        resolve(setInputFocus(0));
      });
      setGameEnd(true);
    }
  }

  function ReGame() {
    setGameEnd(false);
    setRandomNumber(getRandomNumberList(maxLength));
    setCardListValues([]);
    setInputValues(Array.from({ length: maxLength }, () => ""));
    setGameCount(gameCount + 1);
    setGameLengthSet(true);
  }
  //App
  return (
    <Wrapper>
      <ContentsWrapper>
        {/* 모달입니다 */}
        {/* 스타일 넣어야함 */}
        <Modal isOpen={gameLengthSet} style={modalstyle2}>
          정답 갯수를 설정해주세요
          <button
            onClick={() => {
              setMaxLength(3);
              setGameLengthSet(false);
              <Main
                changeInputValue={changeInputValue}
                setInputFocus={setInputFocus}
                inputValues={inputValues}
                cardListValues={cardListValues}
                maxLength={maxLength}
                inputFocus={inputFocus}
                nextFocus={nextFocus}
                confirmButtonClickHandler={confirmButtonClickHandler}
              />;
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setMaxLength(4);
              setGameLengthSet(false);
              <Main
                changeInputValue={changeInputValue}
                setInputFocus={setInputFocus}
                inputValues={inputValues}
                cardListValues={cardListValues}
                maxLength={maxLength}
                inputFocus={inputFocus}
                nextFocus={nextFocus}
                confirmButtonClickHandler={confirmButtonClickHandler}
              />;
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setMaxLength(5);
              setGameLengthSet(false);
              {
                <Main
                  changeInputValue={changeInputValue}
                  setInputFocus={setInputFocus}
                  inputValues={inputValues}
                  cardListValues={cardListValues}
                  maxLength={maxLength}
                  inputFocus={inputFocus}
                  nextFocus={nextFocus}
                  confirmButtonClickHandler={confirmButtonClickHandler}
                />;
              }
            }}
          >
            5
          </button>
        </Modal>
        <Modal isOpen={gameEnd} style={modalstyle1}>
          와! 우승!
          <button
            onClick={() => {
              ReGame();
            }}
          >
            다시하기
          </button>
        </Modal>
        <Header gameCount={gameCount} randomNumber={randomNumber} />
        <Main
          changeInputValue={changeInputValue}
          setInputFocus={setInputFocus}
          inputValues={inputValues}
          cardListValues={cardListValues}
          maxLength={maxLength}
          inputFocus={inputFocus}
          nextFocus={nextFocus}
          confirmButtonClickHandler={confirmButtonClickHandler}
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
const modalstyle1: Styles = {
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
const modalstyle2: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
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
