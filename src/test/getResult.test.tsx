import { getResult } from "../gamePolicy/getResult";

describe("getResult test code", () => {
  test("결과가 key로 스트라이크,볼,아웃,승리결과를 갖고온다", () => {
    const result = getResult([1], [3]);
    const sample = ["strike", "ball", "out", "victory"];
    Object.keys(result).forEach((key) => {
      expect(sample.includes(key)).toEqual(true);
    });
  });
  test("입력값이 다른 갯수만큼 out의 수가 나온다", () => {
    expect(getResult([0, 1, 2], [1, 2, 0]).out).toEqual(0);
    expect(getResult([0, 1, 2], [1, 2, 3]).out).toEqual(1);
    expect(getResult([0, 1, 2], [1, 5, 3]).out).toEqual(2);
    expect(getResult([0, 1, 2], [4, 6, 3]).out).toEqual(3);
  });
  test("입력값이 같은 갯수만큼 strike의 수가 나온다", () => {
    expect(getResult([0, 1, 2], [1, 2, 0]).strike).toEqual(0);
    expect(getResult([0, 1, 2], [0, 2, 3]).strike).toEqual(1);
    expect(getResult([0, 1, 2], [0, 5, 2]).strike).toEqual(2);
    expect(getResult([0, 1, 2], [0, 1, 2]).strike).toEqual(3);
  });
  test("입력값에서 답에 포함은 되지만 위치는 맞지 않으면 ball이 나온다", () => {
    expect(getResult([0, 1, 2], [3, 4, 5]).ball).toEqual(0);
    expect(getResult([0, 1, 2], [1, 4, 2]).ball).toEqual(1);
    expect(getResult([0, 1, 2], [0, 2, 1]).ball).toEqual(2);
    expect(getResult([0, 1, 2], [1, 2, 0]).ball).toEqual(3);
  });
  test("strike,out,ball의 갯수의 합은 항상 정답크기와 같다", () => {
    const result1 = getResult([0, 1, 2], [3, 4, 5]);
    expect(result1.strike + result1.out + result1.ball).toEqual(3);
    const result2 = getResult([0, 1, 2], [1, 4, 2]);
    expect(result2.strike + result2.out + result2.ball).toEqual(3);
    const result3 = getResult([0, 1, 2], [0, 5, 2]);
    expect(result3.strike + result3.out + result3.ball).toEqual(3);
    const result4 = getResult([0, 1, 2], [1, 5, 3]);
    expect(result4.strike + result4.out + result4.ball).toEqual(3);
  });
  test("strike가 3개면 victory는 true가 된다,아니면 false이다", () => {
    expect(getResult([0, 1, 2], [0, 1, 2]).victory).toEqual(true);
    expect(getResult([0, 1, 2], [0, 2, 3]).victory).toEqual(false);
  });
});
