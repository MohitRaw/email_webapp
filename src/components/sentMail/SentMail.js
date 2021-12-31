import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./SentMail.css";
import SentMailRow from "./SentMailRow";

const SentMail = () => {
  const logData = useSelector(selectUser);
  const sentMailData = JSON.parse(window.localStorage.getItem("jsonData"));

  console.log(sentMailData);

  return (
    <div className="sentMail">
      <div className="sentMail_top">
        <div className="sentMail_top_top">
          <div>
            <h1>Sent Mail</h1>
            <span>(3)</span>
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {sentMailData[logData.userId]["sent_mail"].map((data, index) =>
        <div className="sentMail_bottom">
          <SentMailRow
            id={data? data.index : ""}
            key={index}
            title={data? data.title : ""}
            subject={data? data.subject : ""}
            description={data? data.description : ""}
            times={data? data.time : ""}
          />
        </div>
      )}
    </div>
  );
};

export default SentMail;
