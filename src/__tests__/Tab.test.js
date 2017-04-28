import React from "react";
import renderer from "react-test-renderer";
import Tab from "../Tab";

test("renders with active tab", () => {
  const tree = renderer.create(<Tab day={1} selected/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with inactive tab", () => {
  const tree = renderer.create(<Tab day={1} selected={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
