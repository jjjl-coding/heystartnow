import { getResult } from "./getResult";
import styled from "styled-components";

export function newFunction(
  changeInputValue,
  inputFocus,
  inputValues,
  setCardListValues,
  cardListValues,
  setGamePlaying,
  nextFocus,
  randomNumber
) {
  return (
    <Footer>
      {/* 숫자 */}
      <div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
          return (
            <NumerButton
              onClick={() => {
                changeInputValue(number, inputFocus);
                nextFocus();
              }}
            >
              {number}
            </NumerButton>
          );
        })}
        <ConfirmButton
          onClick={() => {
            const result = getResult(inputValues, randomNumber);
            setCardListValues([
              ...cardListValues,
              { inputValues, result: result },
            ]);
            console.log(result);
            if (result.victory === true) {
              setGamePlaying(true);
            }
          }}
        >
          입력
        </ConfirmButton>
      </div>
    </Footer>
  );
}

const Footer = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
  /* height:25%; */
  /* border:1px solid blue; */
`;

const NumerButton = styled.button`
  border-radius: 5px;
  background-color: blue;
  padding: 10px;
`;

const ConfirmButton = styled.button`
  border-radius: 5px;
  background-color: red;
  padding: 10px;
`;
