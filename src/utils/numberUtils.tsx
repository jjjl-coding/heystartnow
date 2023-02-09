export function getRandomNumberList(arrayLength: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(getSpareNumber(array, arrayLength));
  }
  return array;
}

export function getRandomNumber(maxNumber: number): number {
  let randomNumber: number;
  for (let i = maxNumber; i < maxNumber * 10; i++) {
    if (i / maxNumber > 1 && i % 10 === 0) {
      randomNumber = Math.floor(Math.random() * i);
      return randomNumber;
    }
  }
  return maxNumber;
}

export function getSpareNumber(array: number[], maxNumber: number): number {
  const randomNumber = getRandomNumber(maxNumber);
  if (array.includes(randomNumber)) {
    return getSpareNumber(array, maxNumber);
  }
  return randomNumber;
}
