import React, { SetStateAction, Dispatch, useRef, useEffect } from "react";
import styled from "styled-components";
interface Props {
  setInputFocus: Dispatch<SetStateAction<number>>;
  inputValues: number[];
  changeInputValue: (number: number) => void;
  maxLength: number;
  inputFocus: number;
}
export function AnswerInput({
  setInputFocus,
  inputValues,
  changeInputValue,
  maxLength,
  inputFocus,
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
    e.target.value = null;
    setInputFocus(Number(e.target.id));
    console.log(e.target.value);
  }
  function changeInputfocus2(e: any) {
    if (!Number.isNaN(Number(e.key))) {
      const number = Number(e.key);
      changeInputValue(number);
    } else if (e.key === "Enter") {
      if (inputFocus === maxLength - 1) {
        setInputFocus(0);
      } else {
        setInputFocus(inputFocus + 1);
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
            onKeyDown={changeInputfocus2}
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
