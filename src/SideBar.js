import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "./";

function isEmpty(value) {
  return value == null || value == "";
}

function SideBar({ yearsFilter, sLaunchFilter, sLandFilter }) {
  const [year, setYear] = useState("");
  const [launch, setLaunch] = useState("");
  const [landing, setLanding] = useState("");
  const [yFilter, setYFilter] = useState(yearsFilter);
  const [uFilter, setUFilter] = useState(sLaunchFilter);
  const [aFilter, setAFilter] = useState(sLandFilter);

  const router = useRouter();

  useEffect(() => {
    setYFilter(yearsFilter);
    setUFilter(sLaunchFilter);
    setAFilter(sLandFilter);
  }, [yearsFilter, sLaunchFilter, sLandFilter]);
  useEffect(() => {
    const makeRoute = () => {
      if (year || launch || landing) {
        const queryParams = {
          year,
          launch,
          landing,
        };
        const copyQP = { ...queryParams };
        for (const key in copyQP) {
          if (isEmpty(copyQP[key])) {
            delete copyQP[key];
          }
        }
        return `result?${new URLSearchParams(copyQP).toString()}`;
      }
      return "result";
    };
    router.push(makeRoute());
  }, [year, landing, launch]);

  const handleOnClick = (filter, value) => {
    console.log("filter, value", filter, value);

    switch (filter) {
      case "y":
        setYear(year === value ? "" : value);
        break;
      case "u":
        console.log("Successful Launch", value);
        setLaunch(launch === value ? "" : value);
        break;
      case "a":
        console.log("Successful Landing", value);
        setLanding(landing === value ? "" : value);
        break;
      default:
        break;
    }
  };

  const FilterHead = (name) => (
    <div className="sb-fi-headwrap">
      <p className="sb-fi-head">{name}</p>
    </div>
  );

  return (
    <div className="sb">
      <h4 className="sb-title">Filters</h4>
      {!!yFilter.length && FilterHead("Launch Year")}
      <div className="sb-fi-year">
        {!!yFilter &&
          yFilter.map((year) => (
            <Button
              key={`y-${year.label}`}
              type="y"
              click={handleOnClick}
              {...year}
            />
          ))}
      </div>

      {!!uFilter.length && FilterHead("Successful Launch")}
      <div className="sb-fi-year">
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
      <div className="sb-fi-year">
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
}

export default SideBar;
