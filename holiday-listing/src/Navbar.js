import React from "react";
import Group6 from "../src/assets/Group6.svg";
import Group8 from "../src/assets/Group8.svg";
import Layer2 from "../src/assets/Layer2.svg";
import Layer21 from "../src/assets/Layer21.svg";
import Settings from "../src/assets/Settings.svg";
import LaLayer22 from "../src/assets/LaLayer22.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav__container">
      <div className="navbar__list">
        <div className="left__nav">
            <img src={Settings} alt="Setting" />
            <h4>Setting</h4>
        </div>
        <div className="right__nav">
          <img src={Layer21} alt="Group6" className="navbar_leftlist" />
          <img src={LaLayer22} alt="Group6" className="navbar_leftlist" />
          <img src={Layer2} alt="Group6" className="navbar_leftlist" />
          <img src={Group8} alt="Group6" className="navbar_leftlist__icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
