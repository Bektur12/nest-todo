import React from "react";
import styled from "styled-components";

export const Button = ({ children, bgColor }) => {
  return <ButtonForm bgColor={bgColor}>{children}</ButtonForm>;
};

const ButtonForm = styled("button")`
  width: 150px;
  background: ${(p) => p.bgColor};
  mix-blend-mode: normal;
  border: 1px solid #bab5cd;
  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
`;
