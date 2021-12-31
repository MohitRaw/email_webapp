import React from "react";
import "./Email.css";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from '@mui/icons-material/Label';
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../features/mailSlice";

const Email = () => {
  const selectedMail = useSelector(selectOpenMail);

  const history = useHistory();
  return (
    <div className="email">
      <div className="email_top">
        <div className="email_top_icons" onClick={() => history.push("/inbox")}>
          <ArrowBackIcon />
          <span>Back</span>
        </div>
        <div className="email_top_icons">
          <DeleteIcon />
          <span>Delete</span>
        </div>
      </div>
      
      <div className="email_center">
        <div className="email_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelIcon />
          <p className="email_title">{selectedMail?.title}</p>
          <p className="email_time">{selectedMail?.time}</p>
        </div>
        <div className="email_bodyMessage">
            <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Email;
