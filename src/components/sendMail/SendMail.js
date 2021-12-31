import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage} from "../../features/mailSlice";
import { selectUser } from "../../features/userSlice";

const SendMail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const logData = useSelector(selectUser);
  const userData = JSON.parse(window.localStorage.getItem("jsonData"));

  let user = (emailid) =>{
    for(let key in userData){
      if(userData[key]["email"] === emailid){
        console.log(key)
        return key
      }
    }
      console.log("email id not found")
      return false
  }

  const onSubmit = (formData) => {
    formData.time = new Date().toUTCString();
console.log(formData)
    userData[logData.userId]["sent_mail"].push(formData);
    let _userId = user(formData.title)
    formData.title = userData[logData.userId]["email"]
    if (_userId){
      userData[_userId]["inbox"].push(formData)
    }
console.log(formData)

    window.localStorage.setItem("jsonData", JSON.stringify(userData));
};

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message </h3>
        <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="title"
          type="email"
          placeholder="To"
          {...register("title", { required: true })}
        />
        {errors.title === "required" &&
          <p className="sendMail_error">This is required</p>}
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject === "required" &&
          <p className="sendMail_error">Subject is required !</p>}
        <input
          id="description"
          type="text"
          placeholder="Message..."
          className="sendMail_message"
          {...register("description", { required: true })}
        />
        {errors.description === "required" &&
          <p className="sendMail_error">Message is required !</p>}

        <div className="sendMail_options">
          <button className="sendMail_send" type="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
