import styled from "styled-components";

export function Header({ gameCount }) {
  return (
    <HeaderWrapper>
      <h1>제 {gameCount}회 숫자 야구 게임</h1>
      {/* <h1> {randomNumber}</h1> */}
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  width: 100%;
  /* height:15%; */

  display: flex;
  justify-content: center;
`;
