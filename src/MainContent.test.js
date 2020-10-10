import React from "react";
import { mount } from "enzyme";
import MainContent from "./MainContent";

const data = [];

const wrapped = mount(<MainContent {...data} />);

describe("MainContent", () => {
  test("Should have classNames as expected", () => {
    expect(wrapped.find(".maincon")).toHaveLength(1);
  });
});
