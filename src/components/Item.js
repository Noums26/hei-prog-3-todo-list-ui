import React from "react";

const Item = ({ todo, position, changeTodoState }) => {
  const toDone = () => {
    let temp = { ...todo, state: true };
    changeTodoState(position, temp);
  };
  return (
    <div className="item">
      {!todo.state && <input type="checkbox" onChange={toDone} />}
      <span>{todo.message}</span>
    </div>
  );
};

export default Item;
