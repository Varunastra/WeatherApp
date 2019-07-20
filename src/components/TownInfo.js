import React from "react";
import "./scss/TownInfo.scss";

function TownInfo(props) {
  const onEnterPress = event => {
    if (event.key === "Enter") {
      props.setCity(event.target.value);
    }
  };
  const errorClass = props.error
    ? "town-info__error fade-in"
    : "town-info__error";
  const onSelectChange = event => props.setCity(event.target.value);
  return (
    <div className="town-info">
      <div className={errorClass}>{props.error}</div>
      <div className="town-info__text">Enter town:</div>
      <input
        defaultValue={props.city}
        className="town-info__input"
        onKeyDown={onEnterPress}
      />
      <div className="town-info__select-text">Select town:</div>
      <select className="town-info__select" onChange={onSelectChange}>
        <option>Minsk</option>
        <option>Vitsyebsk</option>
        <option>Mahilyow</option>
      </select>
    </div>
  );
}

export default TownInfo;
