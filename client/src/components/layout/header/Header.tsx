import React from "react";
import { styled } from "@mui/material";

const Header = () => {
  return (
    <HeaderStyled>
      <Title>Todo App</Title>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled("div")(() => ({
  width: "100%",
  height: "100px",
  background: "#0071F6",
  padding: "20px 103px 20px 103px",
}));
const Title = styled("h1")(() => ({
  color: "white",
}));
