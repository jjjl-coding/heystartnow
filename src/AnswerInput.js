import styled from "styled-components";

export function AnswerInput({
  setInputFocus,
  inputValues,
  changeInputValue,
  maxLength,
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
    <InputWrapper>
      {Array.from({ length: maxLength }).map((id, index) => {
        return (
          <InputBox
            id={Number(index)}
            onFocus={changeInputfocus}
            type="number"
            onInput={oninput}
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
