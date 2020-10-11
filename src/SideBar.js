import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import Button from "./Button";

function isEmpty(value) {
  return value === null || value === "";
}

const SideBar = ({ yearsFilter, sLaunchFilter, sLandFilter }) => {
  const [year, setYear] = useState("");
  const [launch, setLaunch] = useState("");
  const [landing, setLanding] = useState("");
  const [yFilter, setYFilter] = useState(yearsFilter);
  const [uFilter, setUFilter] = useState(sLaunchFilter);
  const [aFilter, setAFilter] = useState(sLandFilter);
  const [hasUrlPrams, setHasUrlPrams] = useState(false);

  const router = useRouter();

  // To retain old query params when page reloads
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const y = urlParams.get("year");
    const lu = urlParams.get("launch");
    const la = urlParams.get("landing");
    if (y) setYear(y);
    if (lu) setLaunch(lu);
    if (la) setLanding(la);
    setHasUrlPrams(true);
  }, []);

  // To retain old query params when page reloads
  useEffect(() => {
    setYFilter(yearsFilter);
    setUFilter(sLaunchFilter);
    setAFilter(sLandFilter);
  }, [yearsFilter, sLaunchFilter, sLandFilter]);

  // For redirects with new query params
  useEffect(() => {
    const makeRoute = () => {
      if (year || launch || landing) {
        const queryParams = {
          year,
          launch,
          landing,
        };
        const copyQP = { ...queryParams };
        Object.keys(copyQP).forEach((e) => {
          if (isEmpty(copyQP[e])) {
            delete copyQP[e];
          }
        });
        return `/result?${new URLSearchParams(copyQP).toString()}`;
      }
      return "/result";
    };
    let route = "";
    if (hasUrlPrams) {
      route = makeRoute();
      if (router && route) {
        router.push(route);
      }
    }
  }, [year, landing, launch]);

  // handle click on buttons
  const handleOnClick = (filter, value) => {
    switch (filter) {
      case "y":
        setYear(year === value ? "" : value);
        break;
      case "u":
        setLaunch(launch === value ? "" : value);
        break;
      case "a":
        setLanding(landing === value ? "" : value);
        break;
      default:
        break;
    }
  };

  // Generic filter head component
  const FilterHead = (name) => (
    <div className="sb-fi-headwrap">
      <p className="sb-fi-head">{name}</p>
    </div>
  );

  return (
    <div className="sb">
      <h4 className="sb-title">Filters</h4>
      {!!yFilter.length && FilterHead("Launch Year")}
      <div className="sb-fi-section">
        {!!yFilter &&
          yFilter.map((ele) => (
            <Button
              key={`y-${ele.label}`}
              type="y"
              click={handleOnClick}
              {...ele}
            />
          ))}
      </div>

      {!!uFilter.length && FilterHead("Successful Launch")}
      <div className="sb-fi-section">
        {!!uFilter &&
          uFilter.map((sl) => (
            <Button
              key={`u-${sl.label}`}
              {...sl}
              type="u"
              click={handleOnClick}
            />
          ))}
      </div>

      {!!aFilter.length && FilterHead("Successful Landing")}
      <div className="sb-fi-section">
        {!!aFilter &&
          aFilter.map((sl) => (
            <Button
              key={`a-${sl.label}`}
              {...sl}
              type="a"
              click={handleOnClick}
            />
          ))}
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  yearsFilter: [],
  sLaunchFilter: [],
  sLandFilter: [],
};

SideBar.propTypes = {
  yearsFilter: PropTypes.arrayOf(PropTypes.any),
  sLaunchFilter: PropTypes.arrayOf(PropTypes.any),
  sLandFilter: PropTypes.arrayOf(PropTypes.any),
};

export default SideBar;
