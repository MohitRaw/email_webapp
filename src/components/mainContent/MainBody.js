import React from "react";
import "./MainBody.css";
import MailRow from "./MailRow";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const MainBody = () => {
  const logData = useSelector(selectUser);
  const userData = JSON.parse(window.localStorage.getItem("jsonData"));


  return (
    <div className="mainBody">
      <div className="mainBody_top">
        <div className="mainBody_top_top">
          <div>
            <h1>Inbox</h1>
            <span>(3)</span>
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="mainBody_bottom">
        {userData[logData.userId]["inbox"].map((mail, index) =>
          <MailRow
            id={mail ? mail.index : ""}
            key={index}
            title={mail? mail.title : "" }
            subject={mail? mail.subject : ""}
            description={mail? mail.description : ""}
            time={mail? mail.time : ""}
          />
        )}
      </div>
    </div>
  );
};

export default MainBody;
