import { act, create } from "react-test-renderer";
import App from "../App";

describe("Test App", () => {
  const app = create(<App />);
  const inst = app.root;

  test("App should work", () => {
    const input = inst.findByProps({ className: "todo-input" });
    const e = { target: { value: "Tepr21" } };

    act(() => {
      // Enter value
      input.props.onChange(e);
    });

    expect(input.props.value).toBe("Tepr21");
  });
});
