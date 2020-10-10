import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Loader from "./Loader";

function App({ data }) {
  const [years, setYears] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    const sLaunch = ["true", "false"];
    const sLand = ["true", "false"];
    const urlParams = new URLSearchParams(window.location.search);
    const yearQ = urlParams.get("year");
    const launchQ = urlParams.get("launch");
    const landingQ = urlParams.get("landing");

    const y = !!data && data.map((e) => e.launch_year);

    const uniqueYears = y.length ? [...new Set(y)] : [];
    const yData =
      !!uniqueYears.length &&
      uniqueYears.map((e) => ({
        label: `${e}`,
        value: e,
        selected: e === yearQ,
      }));

    setYears(yData || []);

    const u = sLaunch.map((e) => ({
      label: `${e}`.charAt(0).toUpperCase() + `${e}`.slice(1),
      value: e === "true" ? "true" : "false",
      selected: `${launchQ}` === e,
    }));
    setLaunch(u || []);

    const a = sLand.map((e) => ({
      label: `${e}`.charAt(0).toUpperCase() + `${e}`.slice(1),
      value: e === "true" ? "true" : "false",
      selected: `${landingQ}` === e,
    }));
    setLanding(a || []);
  }, [data]);

  return data ? (
    <div className="app">
      <SideBar
        yearsFilter={years}
        sLaunchFilter={launch}
        sLandFilter={landing}
      />
      <MainContent data={data} />
    </div>
  ) : (
    <Loader />
  );
}

App.defaultProps = {
  data: {},
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};

export default App;
