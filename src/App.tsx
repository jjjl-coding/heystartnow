import styled from "styled-components";
import Modal, { Styles } from "react-modal";
import { getRandomNumberList } from "./utils/numberUtils";
import React, { useState } from "react";
import { Header } from "./Header";
import Body from "./Body";

function App() {
  //상태,설정값
  const [gameCount, setGameCount] = useState(0);
  const [isGameEndModalOpen, setIsGameEndModalOpen] = useState(false);
  const [isGameSettingOpen, setIsGameSettingOpen] = useState(true);
  const [randomNumber, setRandomNumber] = useState<number[]>([]);

  function ReGame() {
    setIsGameEndModalOpen(false);
    setGameCount(gameCount + 1);
    setIsGameSettingOpen(true);
    // setInputFocus(0)
  }
  //App
  return (
    <Wrapper>
      <ContentsWrapper>
        {/* 모달입니다 */}
        <Modal isOpen={isGameEndModalOpen} style={modalstyle1}>
          와! 우승!
          <button
            onClick={() => {
              ReGame();
            }}
          >
            다시하기
          </button>
        </Modal>
        {isGameSettingOpen ? (
          <>
            정답 갯수를 설정해주세요
            {Array.from({ length: 3 }).map((id, index) => {
              return (
                <button
                  onClick={() => {
                    setIsGameSettingOpen(false);
                    setRandomNumber(getRandomNumberList(index + 3));
                  }}
                >
                  {index + 3}
                </button>
              );
            })}
          </>
        ) : (
          <>
            <Header gameCount={gameCount} randomNumber={randomNumber} />
            <Body
              randomNumber={randomNumber}
              setGameEnd={setIsGameEndModalOpen}
            ></Body>
          </>
        )}
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
