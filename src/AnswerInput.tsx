import React, { SetStateAction, Dispatch, useRef, useEffect } from "react";
import styled from "styled-components";

interface Props {
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: (number | undefined)[];
  changeInputValue: (number: number) => void;
  maxLength: number;
  inputFocus: number;
  nextFocus: () => void;
  confirmButtonClickHandler: () => void;
}

export function AnswerInput({
  setInputFocus,
  inputValues,
  changeInputValue,
  maxLength,
  inputFocus,
  nextFocus,
  confirmButtonClickHandler,
}: Props) {
  const inputFocused: any = Array.from({ length: maxLength }, () => {
    return useRef<HTMLInputElement>(null);
  });

  useEffect(() => {
    inputFocused[inputFocus].current.focus();
  }, [inputFocus]);

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
            ref={inputFocused[index]}
            onFocus={changeInputfocus}
            onKeyDown={onKeyDown}
            type="number"
            value={inputValue === undefined ? "" : inputValue.toString()}
          ></InputBox>
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
