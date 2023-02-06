import styled from "styled-components";

export function Card({ item }) {
  return item.result.strike === 3 ? null : (
    <Box>
      <InputValue>
        {item.inputValues.map((inputValue) => {
          return <div>{inputValue}</div>;
        })}
      </InputValue>
      <Hr />
      <ResultBox>
        <Result>
          <ResultS>S</ResultS> <div>{item.result.strike}</div>
        </Result>
        <Result>
          <ResultB>B</ResultB> <div> {item.result.ball}</div>
        </Result>
        <Result>
          <ResultO>O</ResultO> <div> {item.result.out}</div>
        </Result>
      </ResultBox>
    </Box>
  );
}

const Box = styled.div`
  width: 150px;
  height: 125px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
`;
const Hr = styled.hr`
  margin: 5px;
  padding: 0;
  height: 2px;
  background: black;
  border: none;
`;
const InputValue = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 30px;
`;
const ResultBox = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
`;
const Result = styled.div`
  border-radius: 12px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ResultS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
`;
const ResultB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
`;
const ResultO = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
`;
