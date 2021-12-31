import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import InnerSidebar from "./components/innerSidebar/InnerSidebar";
import MainBody from "./components/mainContent/MainBody";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Email from "./components/email/Email";
import SendMail from "./components/sendMail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import LoginForm from "./components/login/LoginForm";
import { selectUser } from "./features/userSlice";
import SentMail from "./components/sentMail/SentMail";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
 console.log(user)
  return (
    <Router>
      {user
        ? <div className="app">
            <Sidebar />
            <div className="app_content">
              <Header />
              <div className="app_content_body">
                <InnerSidebar />
                <Switch>
                  <Route path="/inbox" exact>
                    <MainBody />
                  </Route>
                  <Route path="/mail">
                    <Email />
                  </Route>
                  <Route path="/sentMail">
                    <SentMail />
                  </Route>
                </Switch>
              </div>
              {sendMessageIsOpen && <SendMail />}
            </div>
          </div>
        : <LoginForm />}
    </Router>
  );
}

export default App;
