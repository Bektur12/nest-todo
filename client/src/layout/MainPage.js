import React from "react";
import styled from "styled-components";
import { Form } from "../components/forms/Form";
import { Input } from "../components/UI/Input";
import { Header } from "./Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Введите название дела</h1>
        <Form />
        <h2>Новые дела</h2>
      </MainContainer>
    </>
  );
};

const MainContainer = styled("div")`
  padding: 100px 0px 0px 140px;
  display: flex;
  gap: 35px;
  flex-direction: column;
  align-items: start;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #090909;
  }
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
  }
`;
