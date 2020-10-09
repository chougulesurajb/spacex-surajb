import React from "react";
import { Sat } from "./";

function MainContent({ data }) {
  return (
    <div className="maincon">
      {!!data &&
        data.map((sat) => <Sat key={sat.launch_date_unix} sat={sat} />)}
    </div>
  );
}

export default MainContent;
