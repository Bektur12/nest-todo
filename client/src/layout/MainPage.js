import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Form } from "../components/forms/Form";
import { Header } from "./Header";
import { TodoItem } from "../components/forms/TodoItem";

export const MainPage = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Введите название дела</h1>
        <Form />
        <h2>Новые дела</h2>
        {todos.map((item) => (
          <TodoItem description={item.title} id={item.id} />
        ))}
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
