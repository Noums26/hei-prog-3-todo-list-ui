import React, { useState } from "react";

const Input = ({ sendTodos }) => {
  const [todo, setTodo] = useState("");

  const submitTodo = (e) => {
    e.preventDefault();
    todo && sendTodos({ message: todo, state: false });
    setTodo("");
  };

  return (
    <form onSubmit={submitTodo}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="todo-input"
        placeholder="Add todo"
      />
    </form>
  );
};

export default Input;
