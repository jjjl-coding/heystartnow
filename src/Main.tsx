import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { AnswerInput } from "./AnswerInput";
import { CardList } from "./CardList";
interface Props {
  changeInputValue: (number: number) => void;
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: number[];
  cardListValues: Array<object>;
  maxLength: number;
  inputFocus: number;
}
export function Main({
  changeInputValue,
  setInputFocus,
  inputValues,
  cardListValues,
  maxLength,
  inputFocus,
}: Props) {
  return (
    <MainWrapper>
      {/* 입력칸 3개 생성 */}
      <AnswerInput
        setInputFocus={setInputFocus}
        inputValues={inputValues}
        changeInputValue={changeInputValue}
        maxLength={maxLength}
        inputFocus={inputFocus}
      />
      <CardList cardListValues={cardListValues} />
    </MainWrapper>
  );
}

//스타일
const MainWrapper = styled.div`
  width: 100%;
  height: 400px;
  //background-color: red;
`;
