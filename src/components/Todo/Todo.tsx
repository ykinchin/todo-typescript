import React, { FC, useEffect, useRef, useState } from "react";
import {
  AiFillEdit,
  AiOutlineCheck,
  AiFillDelete,
  AiOutlineClose,
} from "react-icons/ai";

import styles from "./Todo.module.scss";
import { ITodo } from "../../types/types";
import { useAppDispatch } from "../../hooks";
import {
  removeTodo,
  toggleComplete,
  updateTodo,
} from "../../store/reducers/todoSlice";

interface Props {
  todo: ITodo;
}

const Todo: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.text);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const onEditHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, text: editTodo, isDone: todo.isDone }));
    setEdit(false);
  };

  return (
    <form
      className={styles.todo}
      onSubmit={(e) => {
        onEditHandler(e);
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
        <s className={styles.todo__text}>{todo.text}</s>
      ) : (
        <span className={styles.todo__text}>{todo.text}</span>
      )}

      <div className={styles.todo__icons}>
        <span
          className={styles.todo__icon}
          onClick={(id) => {
            !edit && !todo.isDone && setEdit(!edit);
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className={styles.todo__icon}
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <AiFillDelete />
        </span>
        <span
          className={styles.todo__icon}
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          {todo.isDone ? <AiOutlineClose color='red' /> : <AiOutlineCheck />}
        </span>
      </div>
    </form>
  );
};

export default Todo;
