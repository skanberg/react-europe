import React from "react";
import renderer from 'react-test-renderer';
import Speaker from "../Speaker";

test("Speaker renders correctly", () => {
  const tree = renderer.create(
    <Speaker
      avatarUrl="http://server/image.png"
      name="name"
      twitter="twitter"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
