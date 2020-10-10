import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

const data = {
  label: 2006,
  value: 2006,
  selected: false,
  type: "y",
  click: () => {},
};

const wrapped = mount(<Button {...data} />);

describe("Buttom", () => {
  test("Should have classNames as expected", () => {
    expect(wrapped.find(".fbtn-wrap")).toHaveLength(1);
    expect(wrapped.find(".fbtn-btn")).toHaveLength(1);
  });
});
