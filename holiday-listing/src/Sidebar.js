import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__box">
        <h4>Generel</h4>
      </div>
      <div className="sidebar__box">
        <h4>Holiday</h4>
      </div>
      <div className="sidebar__box">
        <h4>Leave</h4>
      </div>
    </div>
  );
}

export default Sidebar;
