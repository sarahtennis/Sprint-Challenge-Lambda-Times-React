import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
      width: 1280px;
    }
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Span = styled.span`
  align-self: flex - end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  ${props => (props.type === "date" ? `margin-left: 25px; flex: 1;` : null)}
  ${props => (props.type === "temp" ? `text-align: right; margin-right: 25px; flex: 1;` : null)}
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Span type="date">SMARCH 32, 2018</Span>
      <HeaderH1>Lambda Times</HeaderH1>
      <Span type="temp">98°</Span>
    </HeaderDiv>
  )
}

export default Header;