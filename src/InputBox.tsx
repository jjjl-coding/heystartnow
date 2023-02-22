import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  value: string;
  isFocused: boolean;
  id: string;
}

function InputBox({ onFocus, onKeyDown, value, isFocused, id }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) ref?.current?.focus();
  }, [isFocused]);

  return (
    <StyledInput
      id={id}
      ref={ref}
      type="number"
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      value={value}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
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

export default InputBox;
