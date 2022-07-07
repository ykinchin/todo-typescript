import React, { FC } from "react";

import { useAppSelector } from "../../hooks";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.scss";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
