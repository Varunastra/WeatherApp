import React from "react";
import "./scss/TownInfo.scss"

function TownInfo(props) {
  
  const onEnterPress = event => {
    if (event.key === "Enter") {
      props.setCity(event.target.value);
    }
  };
  const onSelectChange = event => props.setCity(event.target.value);
  return (
    <div className="town-info">
      <div className="town-info__error">
        {props.error}</div>
      <div className="town-info__text">Enter town:</div>
      <input defaultValue={props.city} className="town-info__input" onKeyDown={onEnterPress}></input>
      <div className="town-info__select-text">Select town:</div>
      <select className="town-info__select" onChange={onSelectChange} value={props.city}>
        <option>Minsk</option>
        <option>Vitsyebsk</option>
        <option>Mahilyow</option>
      </select>
    </div>
  );
}

export default TownInfo;
