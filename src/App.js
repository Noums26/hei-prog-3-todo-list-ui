import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo";
import Done from "./components/Done";
import Section from "./components/Section";

function App() {
  const [todos, setTodos] = useState([]);

  const changeTodoState = (index, todo) => {
    let tempTodos = [...todos];
    tempTodos[index] = todo;
    setTodos(tempTodos);
  };

  const sendTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <h2>TODO LIST</h2>
      <Input sendTodos={sendTodos} />
      <div className="flex">
        <Section title="TODO">
          {todos.map(
            (item, index) =>
              !item.state && (
                <Todo
                  key={index}
                  position={index}
                  todo={item}
                  changeTodoState={changeTodoState}
                />
              )
          )}
        </Section>
        <Section title="DONE">
          {todos.map(
            (item, index) => item.state && <Done key={index} todo={item} />
          )}
        </Section>
      </div>
    </div>
  );
}

export default App;
