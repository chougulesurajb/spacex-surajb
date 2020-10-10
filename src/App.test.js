import React from "react";
import { mount } from "enzyme";
import App from "./App";

const data = [];
const wrapped = mount(<App data={data} />);

describe("App", () => {
  test("Should have classNames as expected", () => {
    expect(wrapped.find(".app")).toHaveLength(1);
  });
});
