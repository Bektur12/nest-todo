import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { completedTodo, deleteTodo, patchTodo } from "../../store/todoActions";
import { Button } from "../UI/Button";

export const TodoItem = ({ description, id, done }) => {
  const [todoId, setTodoID] = useState(null);

  const [changeValue, setChangeValue] = useState("");

  const dispatch = useDispatch();

  const deleteItem = () => dispatch(deleteTodo(id));

  const openInputChangeValue = (id) => {
    setTodoID(id);
    setChangeValue(description);
  };

  const changeValueInput = () => {
    dispatch(patchTodo({ id, title: changeValue }));
    setTodoID(null);
  };
  const completedTodoItem = () => {
    dispatch(completedTodo({ id, done: !done, title: description }));
  };
  return (
    <TodoItemContainer>
      {todoId === id ? (
        <ChangeInputContainer>
          <ChangeInputStyled
            value={changeValue}
            onChange={(e) => setChangeValue(e.target.value)}
          />
          <Button bgColor="#0071F6" onClick={changeValueInput}>
            Сохранить
          </Button>
        </ChangeInputContainer>
      ) : (
        <>
          <h1 style={{ textDecoration: done ? "line-through" : "" }}>
            {description}
          </h1>
          <div className="content">
            <Button bgColor="#0071F6" onClick={() => openInputChangeValue(id)}>
              Изменить
            </Button>
            <Button bgColor="#1EEC33" onClick={completedTodoItem}>
              Завершить
            </Button>
            <Button bgColor="#FF6B6B" onClick={deleteItem}>
              Удалить
            </Button>
          </div>
        </>
      )}
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled("div")`
  width: 80%;
  background: #ffffff;
  border: 1px solid #dad3d3;
  border-radius: 10px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  .content {
    display: flex;
    gap: 25px;
  }
  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;

const ChangeInputContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ChangeInputStyled = styled("input")`
  width: 40%;
  background: #ffffff;
  border: 1px solid #dad3d3;
  border-radius: 10px;
  outline: none;
  height: 72px;
  border-left: none;
  border-right: none;
`;
