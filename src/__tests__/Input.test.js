import renderer from "react-test-renderer";
import Input from "../components/Input";

describe("Input test", () => {
  test("should test input snapshot", () => {
    const input = renderer.create(<Input sendTodos={jest.fn()} />).toJSON();

    expect(input).toMatchSnapshot();
  });
});
