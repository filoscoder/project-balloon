import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  loggedOut = () => {
    console.log('trying to logout!')


    return (fetch('/logout', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }));
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Are you sure?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              현재 계정에서 로그아웃 하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Link
            to="/config"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button onClick={this.handleClose} color="secondary">
              취소
            </Button>
            </Link>
            <Button color="primary" onClick={this.loggedOut}>확인</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LogOut;
