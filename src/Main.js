import styled from "styled-components";
import { AnswerInput } from "./AnswerInput";
import { CardList } from "./CardList";

export function Main({
  changeInputValue,
  setInputFocus,
  inputValues,
  cardListValues,
  maxLength,
}) {
  return (
    <MainWrapper>
      {/* 입력칸 3개 생성 */}
      <AnswerInput
        setInputFocus={setInputFocus}
        inputValues={inputValues}
        changeInputValue={changeInputValue}
        maxLength={maxLength}
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
