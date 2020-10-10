import React from "react";
import { mount } from "enzyme";
import Sat from "./Sat";

const data = {
  sat: {
    links: { mission_patch: "" },
    mission_id: 2006,
    launch_date_unix: 1111,
    mission_name: "y",
    launch_year: 2000,
    launch_success: true,
    launch_landing: false,
  },
};

const wrapped = mount(<Sat {...data} />);

describe("Sat", () => {
  test("Should have classNames as expected", () => {
    expect(wrapped.find(".sat")).toHaveLength(1);
    expect(wrapped.find(".sat-img-wrap")).toHaveLength(1);
    expect(wrapped.find(".sat-title")).toHaveLength(1);
    expect(wrapped.find(".sat-detail-head")).toHaveLength(4);
  });
});
