import React, { useState } from "react";
import "./Sidebar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import DiamondIcon from "@mui/icons-material/Diamond";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MailIcon from "@mui/icons-material/Mail";
import PieChartIcon from "@mui/icons-material/PieChart";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import MonitorIcon from "@mui/icons-material/Monitor";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleHandler = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className={openSidebar ? "sidebar" : "sidebar_collapsed"}>
      <div className="sidebar_head">
        <AccountCircleIcon />
        <div className="sidebar_head_icon" onClick={toggleHandler}>
          {openSidebar ? <MenuIcon /> : <ArrowForwardIcon/>}
        </div>
        {openSidebar ? <p>Mohit Rawat</p> : <></>}
        {openSidebar ? 
          <div>
            <p>profession</p>
            <ArrowDropDownIcon />
          </div> : <></>}
      </div>
      <div className="sidebar_content">
        <SidebarOption
          Icon={DashboardIcon}
          title={openSidebar ? "Dashboard" : ''}
          Icon2={ArrowLeftIcon}
        />
        <SidebarOption
          Icon={DiamondIcon}
          title={openSidebar ? "Layout":''}
          Icon2={ArrowLeftIcon}
        />
        <SidebarOption
          Icon={AutoGraphIcon}
          title={openSidebar ? "Graph" : ''}
          Icon2={ArrowLeftIcon}
        />
        <SidebarOption Icon={MailIcon} title={openSidebar ? "Mailbox": ''} Icon2={ArrowLeftIcon} />
        <SidebarOption
          Icon={PieChartIcon}
          title={openSidebar ? "Metrics" : ''}
          Icon2={ArrowLeftIcon}
        />
        <SidebarOption
          Icon={WidgetsIcon}
          title={openSidebar ? "Widgets" : ''}
          Icon2={ArrowLeftIcon}
        />
        <SidebarOption
          Icon={DynamicFormIcon}
          title={openSidebar ? "Forms" : ""}
          Icon2={ArrowLeftIcon}
        />
        <SidebarOption
          Icon={MonitorIcon}
          title={openSidebar ? "AppViews" : ""}
          Icon2={ArrowLeftIcon}
        />
      </div>
    </div>
  );
};

export default Sidebar;
