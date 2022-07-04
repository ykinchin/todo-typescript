import React, { FC, useEffect, useRef, useState } from "react";
import { AiFillEdit, AiOutlineCheck, AiFillDelete } from "react-icons/ai";

import styles from "./Todo.module.scss";
import { ITodo } from "../../types/types";

interface Props {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Todo: FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const onCompleteHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const onRemoveHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onEditHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      className={styles.todo}
      onSubmit={(e) => {
        onEditHandler(e, todo.id);
      }}
    >
      {edit ? (
        <input
          ref={inputRef}
          type='text'
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className={styles.todo__text}>{todo.todo}</s>
      ) : (
        <span className={styles.todo__text}>{todo.todo}</span>
      )}

      <div className={styles.todo__icons}>
        <span
          className={styles.todo__icon}
          onClick={() => {
            !edit && !todo.isDone && setEdit(!edit);
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className={styles.todo__icon}
          onClick={() => onRemoveHandler(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className={styles.todo__icon}
          onClick={() => onCompleteHandler(todo.id)}
        >
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default Todo;
