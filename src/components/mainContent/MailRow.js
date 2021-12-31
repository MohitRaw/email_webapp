import React from "react";
import { useHistory } from "react-router-dom";
import "./MailRow.css";
import {useDispatch, useSelector} from "react-redux";
import {selectMail} from "../../features/mailSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import { selectUser } from "../../features/userSlice";

const MailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logData = useSelector(selectUser);

  const userData = JSON.parse(window.localStorage.getItem("jsonData"));


  const openMail = () => {
    dispatch(selectMail({
        id,
        title,
        subject,
        description,
        time,
    }));

    history.push("/mail");
};

const deleteHandler = () => {
 userData[logData.userId]["inbox"].splice(id, 1)
 window.localStorage.setItem("jsonData", JSON.stringify(userData));

}

  return (
    <div className="mailRow" >
      <input type="checkbox" />
      <DeleteIcon onClick={deleteHandler}/>
      <div className="mailRow_content" onClick={openMail}>
        <div className="mailRow_left" >
          <p>
            {title}
          </p>
        </div>
        <div className="mailRow_center">
          <h4>
            {subject}
          </h4>
        </div>
        <div className="mailRow_right">
          <p>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MailRow;
