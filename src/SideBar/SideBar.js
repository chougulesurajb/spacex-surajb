import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function isEmpty(value) {
  return value == null || value == "";
}

const yearsFilter = [
  { title: 2006, selected: false },
  { title: 2007, selected: false },
  { title: 2008, selected: false },
  { title: 2009, selected: false },
  { title: 2010, selected: false },
  { title: 2011, selected: false },
  { title: 2012, selected: true },
  { title: 2013, selected: false },
  { title: 2014, selected: false },
];

const sLaunchFilter = [
  { title: "True", selected: false },
  { title: "False", selected: false },
];

const sLandFilter = [
  { title: "True", selected: false },
  { title: "False", selected: false },
];

function SideBar() {
  const [year, setYear] = useState("");
  const [launch, setLaunch] = useState("");
  const [landing, setLanding] = useState("");

  const router = useRouter();

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
        return `?${new URLSearchParams(copyQP).toString()}`;
      }
      return "";
    };
    console.log(makeRoute());
    router.push(makeRoute());
  }, [year, landing, launch]);

  const handleOnClick = (filter, value) => {
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
      {FilterHead("Launch Year")}
      <div className="sb-fi-year">
        {yearsFilter.map((year) => (
          <button
            key={year.title}
            className={`sb-fi-btn sb-fi-btn-${year.selected ? "s" : "ns"}`}
            onClick={() => handleOnClick("y", year.title)}
          >
            {year.title}
          </button>
        ))}
      </div>

      {FilterHead("Successful Launch")}
      <div className="sb-fi-year">
        {sLaunchFilter.map((sl) => (
          <button
            key={`lau-${sl.title}`}
            className={`sb-fi-btn sb-fi-btn-${sl.selected ? "s" : "ns"}`}
            onClick={() => handleOnClick("u", sl.title)}
          >
            {sl.title}
          </button>
        ))}
      </div>

      {FilterHead("Successful Landing")}
      <div className="sb-fi-year">
        {sLandFilter.map((sl) => (
          <button
            key={`la-${sl.title}`}
            className={`sb-fi-btn sb-fi-btn-${sl.selected ? "s" : "ns"}`}
            onClick={() => handleOnClick("a", sl.title)}
          >
            {sl.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
