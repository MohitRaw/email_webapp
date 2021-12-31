import React from "react";
import "./SentMailRow.css";

const SentMailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="sentMailRow">
      <input type="checkbox" />
      <div className="sentMailRow_content">
        <div className="sentMailRow_left">
          <p>
            {title}
          </p>
        </div>
        <div className="sentMailRow_center">
          <h4>
            {subject} - {description}
          </h4>
        </div>
        <div className="sentMailRow_right">
          <p>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SentMailRow;
