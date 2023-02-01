import React from "react";

const Todo = ({ todo, position, changeTodoState }) => {
  const toDone = () => {
    let temp = { ...todo, state: true };
    changeTodoState(position, temp);
  };
  return (
    <div className="item">
      <span>
        <input type="checkbox" onChange={toDone} />
        {todo.message}
      </span>
    </div>
  );
};

export default Todo;
