import * as React from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
import Button from "@mui/material/Button";

export default function Form() {
  return (
    <div className="formMain">
      <TextField id="standard-basic" label="First Name" variant="standard" />

      <TextField id="standard-basic" label="Last Name" variant="standard" />

      <TextField id="standard-basic" label="Standard" variant="standard" />

      <TextField id="standard-basic" label="Email Address" variant="standard" />

      <TextField id="standard-basic" label="Password" variant="standard" />
      <Button variant="contained">Submit</Button>
    </div>
  );
}
