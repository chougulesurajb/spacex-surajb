import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SideBar } from "./";
import { MainContent } from "./";
import { Loader } from "./";

function App({ data }) {
  const [years, setYears] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [landing, setLanding] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const sLaunch = ["true", "false"];
    const sLand = ["true", "false"];
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get("year");
    const launch = urlParams.get("launch");
    const landing = urlParams.get("landing");

    const y =
      !!data &&
      data.map((e) => {
        return e.launch_year;
      });

    const uniqueYears = y.length ? [...new Set(y)] : [];
    const yData =
      !!uniqueYears.length &&
      uniqueYears.map((e) => {
        return {
          label: `${e}`,
          value: e,
          selected: e == year,
        };
      });

    setYears(yData);

    const u = sLaunch.map((e) => {
      return {
        label: `${e}`.charAt(0).toUpperCase() + `${e}`.slice(1),
        value: e === "true" ? "true" : "false",
        selected: `${launch}` === e,
      };
    });
    setLaunch(u);

    const a = sLand.map((e) => {
      return {
        label: `${e}`.charAt(0).toUpperCase() + `${e}`.slice(1),
        value: e === "true" ? "true" : "false",
        selected: `${landing}` === e,
      };
    });
    setLanding(a);
    if (window.location.pathname === "/") {
      router.replace("/result");
    }
  }, [data]);

  return !!data && !!data.length ? (
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

export default App;
