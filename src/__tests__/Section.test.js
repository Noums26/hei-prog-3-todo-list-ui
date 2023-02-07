import { create } from "react-test-renderer";
import Section from "../components/Section";

test("should test empty todo section snapshot", () => {
  const section = create(<Section title="TODO" />).toJSON();

  expect(section).toMatchSnapshot();
});

test("should test empty done section snapshot", () => {
  const section = create(<Section title="DONE" />).toJSON();

  expect(section).toMatchSnapshot();
});

test("should test todo section snapshot", () => {
  const todo_section = create(
    <Section title="TODO">
      <div>Tepr</div>
    </Section>
  );

  const ins = todo_section.root.children[0].props.children[2].props.children;

  expect(ins).toBe("Tepr");
});

test("should test done section snapshot", () => {
  const done_section = create(
    <Section title="DONE">
      <div>Tepr</div>
    </Section>
  );

  const ins = done_section.root.children[0].props.children[2].props.children;

  expect(ins).toBe("Tepr");
});
