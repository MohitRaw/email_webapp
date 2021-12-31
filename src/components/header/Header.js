import React from "react";
import "./Header.css";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useHistory } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  }
  return (
    <div className="header">
      <div className="header_left">
        <input type="text" placeholder="search for something..." />
      </div>
      <div className="header_right">
        <EmailIcon />
        <NotificationsIcon />
        <div className="header_right_icon" onClick={(e)=> handleLogout(e)}>
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
