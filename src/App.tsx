import React, { FC } from "react";

import CustomInput from "./components/CustomInput/CustomInput";
import TodoList from "./components/TodoList/TodoList";
import "./main.scss";

const App: FC = () => {
  return (
    <div className='app'>
      <h1>Task List</h1>
      <CustomInput />
      <TodoList />
    </div>
  );
};

export default App;
