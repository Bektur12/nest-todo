import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

export const Form = () => {
  return (
    <FormContainer>
      <Input />
      <Button bgColor="##FFFFFF">создать</Button>
    </FormContainer>
  );
};

const FormContainer = styled("div")`
  width: 100%;
  display: flex;
  gap: 35px;
`;
