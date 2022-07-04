import React, { FC, useState } from "react";
import CustomInput from "./components/CustomInput/CustomInput";
import TodoList from "./components/TodoList/TodoList";

import "./main.scss";
import { ITodo } from "./types/types";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAddHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo)
      setTodos([...todos, { todo: todo, id: Date.now() , isDone: false }]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div className='app'>
      <h1>Task List</h1>
      <CustomInput todo={todo} setTodo={setTodo} AddHandler={onAddHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
