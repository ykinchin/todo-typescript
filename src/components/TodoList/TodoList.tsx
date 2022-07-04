import React, { FC } from "react";
import { ITodo } from "../../types/types";
import Todo from "../Todo/Todo";

import styles from "./TodoList.module.scss";

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
