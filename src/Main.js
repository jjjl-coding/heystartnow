import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Card } from "./Card";

export function Main({
  changeInputValue,
  setInputFocus,
  inputValues,
  cardListValues,
}) {
  function oninput(e) {
    let number = Number(e.target.value);
    if (e.target.value.length > 1) {
      number = e.target.value[e.target.value.length - 1];
    }
    changeInputValue(number);
  }
  function changeInputfocus(e) {
    setInputFocus(Number(e.target.id));
  }

  return (
    <MainWrapper>
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
      <CardList cardListValues={cardListValues} />
    </MainWrapper>
  );
}

function CardList({ cardListValues }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cardListValues]);

  return (
    <CardListWrapper>
      {/* 입력한 숫자에 대한 결과 카드 */}
      {cardListValues.map((item) => {
        return <Card item={item}></Card>;
      })}
      <div ref={bottomRef} />
    </CardListWrapper>
  );
}

//스타일
const MainWrapper = styled.div`
  width: 100%;
  height: 400px;
  //background-color: red;
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

const CardListWrapper = styled.div`
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
