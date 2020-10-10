import React from "react";
import PropTypes from "prop-types";

import Sat from "./Sat";

function MainContent({ data }) {
  return (
    <div className="maincon">
      {!!data &&
        data.map((sat, i) => (
          <Sat key={`${sat.launch_date_unix}-${i}`} sat={sat} />
        ))}
    </div>
  );
}

MainContent.defaultProps = {
  data: {},
};

MainContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};

export default MainContent;
