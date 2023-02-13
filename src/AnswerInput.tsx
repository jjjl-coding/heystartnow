import React, { SetStateAction, Dispatch, useRef, useEffect } from "react";
import styled from "styled-components";
interface Props {
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: (number | string)[];
  changeInputValue: (number: number) => void;
  maxLength: number;
  inputFocus: number;
  confirmButtonClickHandler: () => void;
  nextFocus: () => void;
}
export function AnswerInput({
  setInputFocus,
  inputValues,
  changeInputValue,
  maxLength,
  inputFocus,
  confirmButtonClickHandler,
  nextFocus,
}: Props) {
  const inputFocused: any = Array.from({ length: maxLength }, () => {
    return useRef<HTMLInputElement>(null);
  });

  useEffect(() => {
    inputFocused[inputFocus].current.focus();
  }, [inputFocus]);

  function oninput(e: any) {
    const number = Number(e.target.value[e.target.value.length - 1]);
    console.log(e);
    changeInputValue(number);
  }

  function changeInputfocus(e: any) {
    setInputFocus(Number(e.target.id));
    console.log(e);
  }

  function onKeyDown(e: any) {
    if (!Number.isNaN(Number(e.key))) {
      const number = Number(e.key);
      changeInputValue(number);
      if (number == 0) {
        e.target.value = 0;
      }
    } else if (e.key === "Enter") {
      if (inputValues.includes("") === false) {
        confirmButtonClickHandler();
      } else {
        nextFocus();
      }
    }
  }

  return (
    <InputWrapper>
      {Array.from({ length: maxLength }).map((id, index) => {
        return (
          <InputBox
            id={String(index)}
            ref={inputFocused[index]}
            onFocus={changeInputfocus}
            onKeyDown={onKeyDown}
            type="number"
            //onInput={oninput}
            value={inputValues[index]}
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
