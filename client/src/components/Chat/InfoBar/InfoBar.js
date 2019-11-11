import React from "react";

import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";

import "./infoBar.css";

const InfoBar = ({ room , users }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
      <h3>{users}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
