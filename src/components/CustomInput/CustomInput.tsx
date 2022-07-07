import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../store/reducers/todoSlice";
import styles from "./CustomInput.module.scss";

const CustomInput: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();

  const onAddHandler = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form className={styles.input} onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        className={styles.input__field}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.input__btn} onClick={onAddHandler}>
        Add
      </button>
    </form>
  );
};

export default CustomInput;
