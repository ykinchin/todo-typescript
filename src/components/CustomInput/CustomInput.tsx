import React, { FC } from "react";
import styles from "./CustomInput.module.scss";

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  AddHandler: (e:React.FormEvent) => void;
}

const CustomInput: FC<InputProps> = ({ todo, setTodo, AddHandler }) => {
  return (
    <form className={styles.input} onSubmit={AddHandler}>
      <input
        type='text'
        className={styles.input__field}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.input__btn}>Add</button>
    </form>
  );
};

export default CustomInput;
