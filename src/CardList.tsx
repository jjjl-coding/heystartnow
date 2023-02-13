import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Card } from "./Card";
import React from "react";
interface Props {
  cardListValues: Array<object>;
}
export function CardList({ cardListValues }: Props) {
  const bottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cardListValues]);
  return (
    <CardListWrapper>
      {/* 입력한 숫자에 대한 결과 카드 */}
      {cardListValues.map((item) => {
        return <Card item={item}></Card>;
      })}
      <div ref={bottomRef} />
    </CardListWrapper>
  );
}

//스타일
const CardListWrapper = styled.div`
  /* float: "left";
  clear: "both"; */
  display: grid;
  width: 100%;
  height: 300px;
  //background-color: salmon;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: overlay;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.8);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
  }
`;
