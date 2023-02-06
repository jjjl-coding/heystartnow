import styled from "styled-components";

export function Footer({
  changeInputValue,
  nextFocus,
  confirmButtonClickHandler,
}) {
  return (
    <FooterWrapper>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        return (
          <NumerButton
            onClick={() => {
              changeInputValue(number);
              nextFocus();
            }}
          >
            {number}
          </NumerButton>
        );
      })}
      {/* 입력 버튼 */}
      <ConfirmButton
        onClick={() => {
          confirmButtonClickHandler();
        }}
      >
        입력
      </ConfirmButton>
    </FooterWrapper>
  );
}

//스타일
const FooterWrapper = styled.div`
  width: 100%;
  height: 160px;
  //background-color: green;
  /* height:25%; */
  /* border:1px solid blue; */
`;

const NumerButton = styled.button`
  font-size: 30px;
  width: 17%;
  height: 80px;
  border-radius: 5px;
  //background-color: blue;
  //color: #fff;
  padding: 10px;
`;

const ConfirmButton = styled.button`
  font-size: 20px;
  width: 15%;
  height: 80px;

  border-radius: 5px;
  //background-color: red;
  //color: #fff;
  padding: 10px;
`;
