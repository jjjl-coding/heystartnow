const { getResult } = require("../gamePolicy/getResult");

describe("getResult test code", () => {
  test("결과가 key로 스트라이크,볼,아웃,승리결과를 갖고온다", () => {
    const result = getResult();
    const sample = ["strike", "ball", "out", "victory"];
    Object.keys(result).forEach((key) => {
      expect(sample.includes(key)).toEqual(true);
    });
  });
});
