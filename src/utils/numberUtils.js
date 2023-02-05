export function getRandomNumberList(arrayLength) {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(getSpareNumber(array, arrayLength));
  }
  return array;
}

export function getRandomNumber(maxNumber) {
  const randomNumber = Math.floor(Math.random() * maxNumber);

  return randomNumber;
}

export function getSpareNumber(array, maxNumber) {
  const randomNumber = getRandomNumber(maxNumber);
  if (array.includes(randomNumber)) {
    return getSpareNumber(array, maxNumber);
  }
  return randomNumber;
}
