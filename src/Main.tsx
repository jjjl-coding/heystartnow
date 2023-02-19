import { cardListItem } from "Body";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { AnswerInput } from "./AnswerInput";
import { CardList } from "./CardList";
interface Props {
  changeInputValue: (number: number) => void;
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: (number | undefined)[];
  cardListValues: Array<cardListItem>;
  inputFocus: number;
  nextFocus: () => void;
  confirmButtonClickHandler: () => void;
}
export function Main({
  changeInputValue,
  setInputFocus,
  inputValues,
  cardListValues,
  inputFocus,
  nextFocus,
  confirmButtonClickHandler,
}: Props) {
  return (
    <MainWrapper>
      {/* 입력칸 생성 */}
      <AnswerInput
        changeInputValue={changeInputValue}
        setInputFocus={setInputFocus}
        inputValues={inputValues}
        inputFocus={inputFocus}
        nextFocus={nextFocus}
        confirmButtonClickHandler={confirmButtonClickHandler}
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
