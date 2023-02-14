import React, { SetStateAction, Dispatch, useRef, useEffect } from "react";
import styled from "styled-components";
interface Props {
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: (number | string)[];
  changeInputValue: (number: number | string) => void;
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
  const inputFocused: any = Array.from({ length: 10 }, () => {
    return useRef<HTMLInputElement>(null);
  });

  useEffect(() => {
    inputFocused[inputFocus].current.focus();
  }, [inputFocus]);

  function changeInputfocus(e: any) {
    setInputFocus(Number(e.target.id));
  }

  function onKeyDown(e: any) {
    if (!Number.isNaN(Number(e.key))) {
      if (e.key === "0") {
        e.target.value = "0";
        changeInputValue("0");
      } else {
        changeInputValue(Number(e.key));
      }
    } else if (e.key === "Enter") {
      if (inputValues.includes("") === false) {
        confirmButtonClickHandler();
      }
      nextFocus();
    }
  }

  return (
    <InputWrapper>
      {inputValues.map((id, index) => {
        return (
          <InputBox
            id={String(index)}
            ref={inputFocused[index]}
            onFocus={changeInputfocus}
            onKeyDown={onKeyDown}
            type="number"
            value={inputValues[index]}
          ></InputBox>
        );
      })}
      {}
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
