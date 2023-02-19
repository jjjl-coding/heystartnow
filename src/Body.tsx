import { Dispatch, SetStateAction, useState } from "react";
import { Main } from "./Main";
import { Footer } from "./Footer";
import React from "react";
import { getResult } from "./gamePolicy/getResult";

interface Props {
  randomNumber: number[];
  setGameEnd: Dispatch<SetStateAction<boolean>>;
}

export default function Body({ randomNumber, setGameEnd }: Props) {
  const [inputFocus, setInputFocus] = useState<number>(0);
  const [inputValues, setInputValues] = useState<(number | string)[]>(
    Array.from({ length: randomNumber.length }, () => "")
  );

  const [cardListValues, setCardListValues] = useState<
    Array<{ inputValues: (number | string)[]; result: object }>
  >([]);

  function nextFocus() {
    if (inputFocus === randomNumber.length - 1) {
      return setInputFocus(0);
    }
    setInputFocus(inputFocus + 1);
  }

  function changeInputValue(number: number | string) {
    const clonedArray = [...inputValues];
    clonedArray[inputFocus] = number;
    setInputValues(clonedArray);
  }

  async function confirm() {
    const result = getResult(inputValues, randomNumber);
    if (
      cardListValues.filter((e) => e.inputValues === inputValues).length === 0
    ) {
      setCardListValues([...cardListValues, { inputValues, result: result }]);
    }
    if (result.victory === true) {
      //   await new Promise((resolve) => {
      //     resolve(setInputFocus(0));
      //   });
      setGameEnd(true);
    }
  }

  return (
    <>
      <Main
        changeInputValue={changeInputValue}
        setInputFocus={setInputFocus}
        inputValues={inputValues}
        cardListValues={cardListValues}
        maxLength={randomNumber.length}
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
