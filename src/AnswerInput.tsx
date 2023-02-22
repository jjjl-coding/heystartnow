import React, { SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";

interface Props {
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: (number | undefined)[];
  changeInputValue: (number: number) => void;
  inputFocus: number;
  nextFocus: () => void;
  confirmButtonClickHandler: () => void;
}

export function AnswerInput({
  setInputFocus,
  inputValues,
  changeInputValue,
  inputFocus,
  nextFocus,
  confirmButtonClickHandler,
}: Props) {
  const changeInputfocus: React.FocusEventHandler = (e) => {
    setInputFocus(Number(e.target.id));
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!Number.isNaN(Number(e.key))) {
      changeInputValue(Number(e.key));
    } else if (e.key === "Enter") {
      if (inputValues.includes(undefined) === false) {
        confirmButtonClickHandler();
      }

      nextFocus();
    }
  };

  return (
    <InputWrapper>
      {inputValues.map((id, index) => {
        const inputValue = inputValues[index];
        return (
          <InputBox
            id={String(index)}
            onFocus={changeInputfocus}
            onKeyDown={onKeyDown}
            value={inputValue === undefined ? "" : inputValue.toString()}
            isFocused={Number(index) === Number(inputFocus)}
          />
        );
      })}
    </InputWrapper>
  );
}

//스타일
const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
`;
