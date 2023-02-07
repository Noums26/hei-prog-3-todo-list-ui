import { create } from "react-test-renderer";
import Item from "../components/Item";

test("should test todo snapshot", () => {
  const todo = { message: "Tepr 21", state: false };
  const item = create(
    <Item todo={todo} position={1} changeTodoState={jest.fn()} />
  ).toJSON();

  expect(item).toMatchSnapshot();
});

test("should test done snapshot", () => {
  const todo = { message: "Tepr 21", state: true };
  const item = create(
    <Item todo={todo} position={1} changeTodoState={jest.fn()} />
  ).toJSON();

  expect(item).toMatchSnapshot();
});
