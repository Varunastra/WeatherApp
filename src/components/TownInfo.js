import React from "react";
import "./scss/TownInfo.scss"

function TownInfo(props) {
  const onCitySelected = event => {
    localStorage.setItem("city", event.target.value);
    props.setServiceOrCityChanged(true);
  };
  const location = localStorage.getItem("city") || "not set";
  return (
    <div className="town-info">
      <div className="town-info__text">Select town</div>
      <select
        className="town-info__select"
        value={location}
        onChange={onCitySelected}
      >
        <option value="Vitsyebsk">Vitsyebsk</option>
        <option value="Minsk">Minsk</option>
        <option value="Homel">Homel</option>
      </select>
    </div>
  );
}

export default TownInfo;
