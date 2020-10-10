import React from "react";
import { mount } from "enzyme";
import SideBar from "./SideBar";

const data = {
  yearsFilter: [
    { label: 2006, value: 2006, selected: false },
    { label: 2007, value: 2007, selected: false },
  ],
  sLaunchFilter: [
    { label: "true", value: true, selected: false },
    { label: "false", value: false, selected: false },
  ],
  sLandFilter: [
    { label: "true", value: true, selected: false },
    { label: "false", value: false, selected: false },
  ],
};

const wrapped = mount(<SideBar {...data} />);

describe("SideBar", () => {
  test("Should have classNames as expected", () => {
    expect(wrapped.find(".sb")).toHaveLength(1);
    expect(wrapped.find(".sb-fi-section")).toHaveLength(3);
    expect(wrapped.find(".sb-title")).toHaveLength(1);
  });
});
