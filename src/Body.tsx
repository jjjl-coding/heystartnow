import { Dispatch, SetStateAction, useState } from "react";
import { Main } from "./Main";
import { Footer } from "./Footer";
import React from "react";
import { getResult } from "./gamePolicy/getResult";

export type cardListItem = {
  inputValues: (number | undefined)[];
  result: { ball: number; strike: number; out: number; victory: boolean };
};
interface Props {
  randomNumber: number[];
  setGameEnd: Dispatch<SetStateAction<boolean>>;
}

export default function Body({ randomNumber, setGameEnd }: Props) {
  const [inputFocus, setInputFocus] = useState<number>(0);
  const [inputValues, setInputValues] = useState<(number | undefined)[]>(
    Array.from({ length: randomNumber.length })
  );

  const [cardListValues, setCardListValues] = useState<Array<cardListItem>>([]);

  function nextFocus() {
    console.log(inputFocus);
    if (inputFocus === randomNumber.length - 1) {
      return setInputFocus(0);
    }
    setInputFocus(inputFocus + 1);
  }

  function changeInputValue(number: number) {
    const clonedArray = [...inputValues];
    clonedArray[inputFocus] = number;
    setInputValues(clonedArray);
  }

  async function confirm() {
    if (isArrayOnlyByNumber(inputValues)) {
      const result = getResult(inputValues, randomNumber);
      if (
        cardListValues.filter((e) => e.inputValues === inputValues).length === 0
      ) {
        setCardListValues([...cardListValues, { inputValues, result: result }]);
      }
      if (result.victory === true) {
        setGameEnd(true);
      }
    }
    throw Error();
  }

  return (
    <>
      <Main
        changeInputValue={changeInputValue}
        setInputFocus={setInputFocus}
        inputValues={inputValues}
        cardListValues={cardListValues}
        inputFocus={inputFocus}
        nextFocus={nextFocus}
        confirmButtonClickHandler={confirm}
      />
      <Footer
        changeInputValue={changeInputValue}
        nextFocus={nextFocus}
        confirmButtonClickHandler={confirm}
      />
    </>
  );
}

function isArrayOnlyByNumber(array: (number | undefined)[]): array is number[] {
  return !array.includes(undefined);
}
