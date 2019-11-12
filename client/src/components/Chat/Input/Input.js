import React from "react";

// import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import "./input.css";
import { TextField, Fab } from "@material-ui/core";

const Input = ({ setMessage, sendMessage, message }) => (
  <div className="input_formContainer">
    <form className="input_form">
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <TextField
            className="input"
            variant="outlined"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event =>
              event.key === "Enter" ? sendMessage(event) : null} /></Grid>
        <Grid item xs={1}>
          <Fab><SendRoundedIcon varient="contained" onClick={e => sendMessage(e)} /></Fab>
        </Grid>
      </Grid>
    </form>
  </div>
);

export default Input;
