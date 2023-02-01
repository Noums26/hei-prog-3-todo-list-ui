import React from "react";

const Section = ({ children, title }) => {
  return (
    <div className="todo-flex">
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
};

export default Section;
