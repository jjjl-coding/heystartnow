export function getResult(tryAnswer, correctAnswer) {
  const out = getOut(tryAnswer, correctAnswer); //correctAnswer.length;
  const strike = getStrike(tryAnswer, correctAnswer);
  const ball = correctAnswer.length - out - strike;
  let victory = false;

  if (strike === 3) {
    victory = true;
  }

  return {
    ball,
    strike,
    out,
    victory,
  };
}

export function getOut(tryAnswer, correctAnswer) {
  let out = correctAnswer.length;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (correctAnswer.includes(tryAnswer[i])) {
      out--;
    }
  }
  return out;
}

export function getStrike(tryAnswer, correctAnswer) {
  let strike = 0;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (tryAnswer[i] === correctAnswer[i]) {
      strike++;
    }
  }
  return strike;
}