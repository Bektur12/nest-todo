import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Todo App</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled("div")`
  width: 100%;
  background: #0071f7;
  height: 100px;
  padding: 22px 103px 22px 103px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
  }
`;
