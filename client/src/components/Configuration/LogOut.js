import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  loggedOut = () => {
    
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
            <Button onClick={this.handleClose} color="secondary">
              취소
            </Button>
            <Button color="primary" onClick={this.loggedOut}>확인</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LogOut;
