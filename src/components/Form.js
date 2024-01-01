import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
import Button from "@mui/material/Button";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [printFirstName, setprintFirstName] = useState("");
  const [printLastName, setprintLastName] = useState("");
  const [printEmailAddress, setprintEmailAddress] = useState("");
  const [printPassword, setprintPassword] = useState("");

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailAddress = (event) => {
    setEmailAddress(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitResult = (event) => {
    event.preventDefault();
    setprintFirstName(firstName);
    setprintLastName(lastName);
    setprintEmailAddress(emailAddress);
    setprintPassword(password);
    console.log({ firstName, lastName, emailAddress, password });
  };
  return (
    <div className="formMain">
      <TextField
        id="standard-basic"
        label="First Name"
        variant="standard"
        value={firstName}
        onChange={changeFirstName}
      />

      <TextField
        id="standard-basic"
        label="Last Name"
        variant="standard"
        value={lastName}
        onChange={changeLastName}
      />

      <TextField
        id="standard-basic"
        label="Email Address"
        variant="standard"
        value={emailAddress}
        onChange={changeEmailAddress}
      />

      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        value={password}
        onChange={changePassword}
      />
      <Button variant="contained" onClick={submitResult}>
        Submit
      </Button>

      <div>Your First Name is {printFirstName}</div>
      <div>Your Last Name is {printLastName}</div>
      <div>Your Email Address is {printEmailAddress}</div>
      <div>Your Password is {printPassword}</div>
    </div>
  );
}
