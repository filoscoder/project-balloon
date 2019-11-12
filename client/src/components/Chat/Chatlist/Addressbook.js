import React, { Component } from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  Divider
} from "@material-ui/core";

const styles = {
  checkbox: {
    marginLeft: "30px",
    color: "primary",
  },
}

let checkboxvalue = [];


class Addressbook extends Component {
  // 생성자
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      users: [],
      checked: false,
    };
  }

  // 열기
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  // 닫기
  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleCheckedValue = (e) => {
    // console.log(e.target.value)
    if (e.target.checked == true) {
      if (!checkboxvalue.includes(e.target.value)) {
        checkboxvalue.push(e.target.value)
      }
      // console.log(checkboxvalue)
      // console.log(e.target.checked)
      this.setState({ users: checkboxvalue })
    }
    else {
      if (checkboxvalue.includes(e.target.value)) {
        for (var i = 0; i < checkboxvalue.length; i++) {
          if (checkboxvalue[i] === e.target.value) {
            checkboxvalue.splice(i, 1);
          }
        }
        //  console.log(checkboxvalue)
      }

    }
  }

  render() {
    return (
      <div className="addressbookContainer">
        <Button
          variant="outlined"
          aria-label="signup"
          onClick={this.handleClickOpen}
        >
          PLUS
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>새로운 채팅방에 추가할 인원을 선택하여 주십시오.</DialogTitle>
          <Divider />
          <FormControl>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox style={styles.checkbox} value="one" // value=user.id
                  onClick={this.handleCheckedValue}></Checkbox>}
                label="user1"
              />
              <Divider />
              {/* <FormControlLabel
                control={<Checkbox style={styles.checkbox} value="two" 
                onClick={this.handleCheckedValue}></Checkbox>}
                label="user2"
              /> */}
              <Divider />
              <FormControlLabel
                control={<Button>채팅방 생성</Button>}
              />
            </FormGroup>
          </FormControl>
        </Dialog>
      </div>
    );
  }
}
export default Addressbook;
