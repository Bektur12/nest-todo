import React from "react";
import styled from "styled-components";

export const Input = ({ value, onChange }) => {
  return (
    <InputStyled value={value} onChange={(e) => onChange(e.target.value)} />
  );
};

const InputStyled = styled("input")`
  width: 70%;
  height: 57px;
  background: #ffffff;
  mix-blend-mode: normal;
  border: 2px solid #8a72ea;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  padding-left: 15px;
`;
