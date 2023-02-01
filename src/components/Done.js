import React from "react";

const Done = ({ todo }) => {
  return (
    <div className="item">
      <span>{todo.message}</span>
    </div>
  );
};

export default Done;
