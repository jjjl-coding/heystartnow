const {
  getRandomNumber,
  getRandomNumberList,
  getSpareNumber,
} = require("../utils/numberUtils");

describe("number utils test code", () => {
  test("getRandomNumber를 100번해도 0이상 11이하 지정한 숫자 미만 숫자가 나와야 한다.", () => {
    const maxLength = 11;
    const result = Array.from({ length: maxLength }, () => 0);
    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomNumber(maxLength);

      expect(randomNumber >= 0).toEqual(true);
      expect(randomNumber < maxLength).toEqual(true);
      result[randomNumber] = result[randomNumber] + 1;
    }

    result.forEach((item) => {
      expect(item > 1).toEqual(true);
    });
  });

  test("getRandomNumber를 100번해도 0이상 100이하 지정한 숫자 미만 숫자가 나와야 한다.", () => {
    const maxLength = 100;
    const result = Array.from({ length: maxLength }, () => 0);
    for (let i = 0; i < 10000; i++) {
      const randomNumber = getRandomNumber(maxLength);

      expect(randomNumber >= 0).toEqual(true);
      expect(randomNumber < maxLength).toEqual(true);
      result[randomNumber] = result[randomNumber] + 1;
    }

    result.forEach((item) => {
      expect(item > 1).toEqual(true);
    });
  });

  test("getSpareNumber는 숫자로된 리스트를 주면 그 리스트에서 제외하고 랜덤 넘버가 나와야한다.", () => {
    const result9 = getSpareNumber([0, 1, 2, 3, 4, 5, 6, 7, 8], 10);
    const result5 = getSpareNumber([0, 1, 2, 3, 4, 6, 7, 8, 9], 10);
    const result3 = getSpareNumber([0, 1, 2, 4, 5, 6, 7, 8, 9], 10);
    const result2 = getSpareNumber([0, 1, 3, 4, 5, 6, 7, 8, 9], 10);
    const result4 = getSpareNumber([0, 1, 2, 3, 5, 6, 7, 8, 9], 10);

    expect(result9).toBe(9);
    expect(result5).toBe(5);
    expect(result4).toBe(4);
    expect(result3).toBe(3);
    expect(result2).toBe(2);
  });

  test("getRandomNumberList는 크기를 입력받아서 크기만큼의 배열이 나온다.", () => {
    const result = getRandomNumberList(5);

    expect(result).toHaveLength(5);
  });

  test("getRandomNumberList는 중복된 값이 없어야 한다.", () => {
    const result = getRandomNumberList(5);
    const setResult = new Set(result);
    expect([...setResult].length).toEqual(result.length);
  });

  test("getRandomNumberList에 11이 들어간다면?", () => {
    const result = getRandomNumberList(11);

    expect(result).toHaveLength(11);
  });
});
