import React from "react";
import PropTypes from "prop-types";

function Sat({ sat }) {
  const missionIds =
    !!sat.mission_id && !!sat.mission_id.length ? (
      sat.mission_id.map((mid, i) => (
        <p key={`p-${sat.launch_date_unix}${i}`}>{mid}</p>
      ))
    ) : (
      <p>No Ids</p>
    );

  return (
    <div className="sat">
      <div className="sat-img-wrap">
        <img
          className="sat-img"
          src={sat.links.mission_patch}
          alt={sat.mission_name}
        ></img>
      </div>
      <h3 className="sat-title">{sat.mission_name || ""}</h3>
      <div className="sat-detail">
        <h4 className="sat-detail-head">Mission ids :</h4>
        <div>{missionIds}</div>
      </div>
      <div className="sat-detail">
        <h4 className="sat-detail-head">Launch Year :</h4>
        <p>{sat.launch_year}</p>
      </div>
      <div className="sat-detail">
        <h4 className="sat-detail-head">Successful Lauch :</h4>
        <p>{sat.launch_success ? "Yes" : "No"}</p>
      </div>
      <div className="sat-detail">
        <h4 className="sat-detail-head">Successful Landing : </h4>
        <p>{sat.launch_landing ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

Sat.defaultProps = {
  sat: {},
};

Sat.propTypes = {
  sat: PropTypes.objectOf(PropTypes.any),
};

export default Sat;
