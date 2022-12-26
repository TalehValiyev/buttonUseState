import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("hidden");
  const [warnMessage, setWarnMessage] = useState("");
  const [button, setButton] = useState("");
  const openPopup = () => {
    setMessage("hello");
    setName("visible");
  };

  const close = () => {
    setName("hidden");
  };

  const ClickOpen = () => {
    setWarnMessage("xeberdarliq");
    setButton("button-red");
  };
  const clickClose = () => {
    setWarnMessage("");
    setButton("button-blue");
  };
  return (
    <div className="container">
      <h1 className="h1">{warnMessage}</h1>
      <p className={name}>{message}</p>

      <div className="button">
        <button className={button} onClick={ClickOpen} onMouseOver={openPopup}>
          openUp
        </button>
        <button className={button} onClick={clickClose} onMouseLeave={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default App;
