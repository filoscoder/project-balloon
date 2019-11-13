import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Card, List } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 60,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#00000'
  }
}));

export default function PasswdChange() {
  const classes = useStyles();

  return (
    <Card>
      <List
        subheader={<ListSubheader>Check userinfo</ListSubheader>}
        className={classes.root}
      >
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Current password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Check
          </Button>
        </form>
      </List>
      <Divider />

      <List
        subheader={<ListSubheader>Set new password</ListSubheader>}
        className={classes.root}
      >
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New password"
            type="password"
            id="password"
            disabled
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newPassword2"
            label="Confirm new password"
            type="password"
            id="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </List>
    </Card>
  );
}
