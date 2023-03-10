import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useDispatch } from "react-redux";
import { getTodo, todoPost } from "../../store/todoActions";

export const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const sendingData = () => {
    dispatch(todoPost({ title: value }));
  };
  return (
    <FormContainer>
      <Input value={value} onChange={setValue} />
      <Button bgColor="##FFFFFF" onClick={sendingData}>
        создать
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled("div")`
  width: 100%;
  display: flex;
  gap: 35px;
  align-items: center;
`;
