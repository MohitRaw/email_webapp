import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, Icon2, title }) => {
  if (Icon2) {
    return (
      <div className="sidebarOption">
        <div className="sidebarOptions_icon">
          <Icon />
        </div>
        <p>
          {title}
        </p>
        <div>
          <Icon2 className="sidebarOptions_icon" />
        </div>
      </div>
    );
  }

  else{
    return (
      <div className="sidebarOption">
        <div className="sidebarOptions_icon">
          <Icon />
        </div>
        <p>
          {title}
        </p>
      </div>
    )
  }
};


export default SidebarOption;
