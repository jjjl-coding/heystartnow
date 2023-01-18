import styled from "styled-components";

export function Card({ item }) {
  return (
    <Box>
      <InputValue>
        {item.inputValues.map((inputValue) => {
          return <div>{inputValue}</div>;
        })}
      </InputValue>
      <Hr />
      <ResultBox>
        <Result>
          <div>S</div> <div>{item.result.strike}</div>
        </Result>
        <Result>
          <div>B</div> <div> {item.result.ball}</div>
        </Result>
        <Result>
          <div>O</div> <div> {item.result.out}</div>
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
  height: 2px;
  background: black;
  border: none;
`;
const InputValue = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 30px;
`;
const ResultBox = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Result = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
