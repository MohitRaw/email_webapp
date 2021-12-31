import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./LoginForm.css";
import UserData from "../../UserData.json";
import { useHistory } from "react-router-dom";
window.localStorage.setItem("jsonData", JSON.stringify(UserData));

const LoginForm = ({ Login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    for (let key in UserData) {
      if (
        email === UserData[key]["email"] &&
        password === UserData[key]["password"]
      ) {
        dispatch(
          login({
            userId: key,
            email: email,
            password: password,
            loggedIn: true
          })
        );
        history.push("/inbox");

        return console.log("logged in");
      }
    }
    return false;
  };

  return (
    <div className="login">
      <form className="login_form" onSubmit={e => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="submit_btn">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
