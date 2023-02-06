export function getRandomNumberList(arrayLength: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(getSpareNumber(array, arrayLength));
  }
  return array;
}

export function getRandomNumber(maxNumber: number) {
  const randomNumber = Math.floor(Math.random() * maxNumber);

  return randomNumber;
}

export function getSpareNumber(array: number[], maxNumber: number): number {
  const randomNumber = getRandomNumber(maxNumber);
  if (array.includes(randomNumber)) {
    return getSpareNumber(array, maxNumber);
  }
  return randomNumber;
}
