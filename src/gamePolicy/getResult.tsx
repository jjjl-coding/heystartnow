export function getResult(tryAnswer: number[], correctAnswer: number[]) {
  const out: number = getOut(tryAnswer, correctAnswer); //correctAnswer.length;
  const strike: number = getStrike(tryAnswer, correctAnswer);
  const ball: number = correctAnswer.length - out - strike;
  let victory = false;

  if (strike === correctAnswer.length) {
    victory = true;
  }

  type resultBox = {
    ball?: number;
    strike?: number;
    out?: number;
    victory?: boolean;
  };
  const resultBox = {
    ball,
    strike,
    out,
    victory,
  };
  return resultBox;
}

export function getOut(tryAnswer: number[], correctAnswer: number[]) {
  let out = correctAnswer.length;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (correctAnswer.includes(Number(tryAnswer[i]))) {
      out--;
    }
  }
  return out;
}

export function getStrike(tryAnswer: number[], correctAnswer: number[]) {
  let strike = 0;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (Number(tryAnswer[i]) === correctAnswer[i]) {
      strike++;
    }
  }
  return strike;
}
