import React from "react";

function MainContent({ sat }) {
  const satImage = !!sat.links && {
    backgroundImage: `url(${sat.links.mission_patch})`,
  };

  const missionIds =
    !!sat.mission_id && !!sat.mission_id.length
      ? sat.mission_id.map((mid, i) => (
          <p key={`p-${sat.launch_date_unix}${i}`}>{mid}</p>
        ))
      : "Not available";
  return (
    <div className="sat">
      <div className="sat-img-wrap">
        {!!sat.links && !!sat.links.mission_patch ? (
          <div className="sat-img" style={satImage} />
        ) : (
          <div className="sat-img">Image is not available</div>
        )}
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

export default MainContent;
