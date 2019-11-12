import React, { Component } from "react";
import "./sidebar.css";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import DeveloperBoardRoundedIcon from "@material-ui/icons/DeveloperBoardRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';



import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountInfo from './AccountInfo';


const styles = {
  dividermax: {
    backgroundColor: "#327D64",
    width: "200px"
  },
  dividerlow: {
    backgroundColor: "#327D64 "
  },
  changebutton: {
    color: "white"
  }
};



class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarExpanded: true,
      file: null,
      name: '',
      email: '',
    }
  };

  // 기본 사이드바
  sidebarExpanded = () => (
    <div className="sidebar">
      <div className="expanded">
        <Button
          style={styles.changebutton}
          role="presentation"
          onClick={() => this.setState({ isSidebarExpanded: false })}
        >
          <ArrowBackIosRoundedIcon />
        </Button>
      </div>
      <div className="list">
        <List>
          <div className="listitem">

            {/* Account 팝업창 */}
            <PopupState variant="popover" popupId="demo-popup-popover">
              {popupState => (
                <div>

                  {/* Acoount 버튼을 클릭하면 */}
                  <ListItem button variant="contained" {...bindTrigger(popupState)}>

                    <AccountBoxRoundedIcon fontSize="large" />

                    <div className="listitemtext">
                      <ListItemText primary="Accounts" />
                    </div>

                  </ListItem>

                  {/* 팝업창을 활성화 */}
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >

                    {/* 팝업창 */}
                    <div style={styles.popup}>

                      {/* 사진 수정 */}
                      <div style={styles.img}>

                        <input style={styles.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <label htmlFor="raised-button-file">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            name="file"
                          >
                            사진수정
                        </Button>
                        </label>
                      </div> {/* 사진수정 끝 */}

                      {/* 프로젝트정보 */}
                      <div style={styles.projectInfo}>
                        <AccountInfo />
                      </div> {/* 프로젝트정보 끝 */}

                    </div> {/* 팝업창 끝 */}

                  </Popover>
                </div>
              )}
            </PopupState>
          </div>




          {/* <List>
          <div className="listitem">

            <ListItem button>
              <AccountBoxRoundedIcon fontSize="large" />
              <div className="listitemtext">
                <ListItemText primary="Accounts" />
              </div>
            </ListItem>

          </div> */}
          <Divider style={styles.dividermax} />

          <div className="listitem">

            <Link to="/kanban" style={{ textDecoration: 'none', color: 'white' }}>
              <ListItem button>
                <DeveloperBoardRoundedIcon fontSize="large" />
                <div className="listitemtext">
                  <ListItemText primary="Boards" />
                </div>
              </ListItem>
            </Link>
          </div>


          <Divider style={styles.dividermax} />
          <div className="listitem">
            <Link to="/chat" style={{ textDecoration: 'none', color: 'white' }}>
              <ListItem button>
                <MessageRoundedIcon fontSize="large" />
                <div className="listitemtext">
                  <ListItemText primary="Messges" />
                </div>
              </ListItem>
            </Link>
          </div>
          <Divider style={styles.dividermax} />
          <div className="listitem">
            <Link to="/config" style={{ textDecoration: 'none', color: 'white' }}>
              <ListItem button>
                <SettingsRoundedIcon fontSize="large" />
                <div className="listitemtext">
                  <ListItemText primary="Settings" />
                </div>
              </ListItem>
            </Link>
          </div>
          <Divider style={styles.dividermax} />
        </List>
      </div>
    </div>
  ); // after button click, isSidebarExpanded => false

  sidebarCollapsed = () => (
    <div className="sidebar collapsed">
      <div className="collaps">
        <Button
          style={styles.changebutton}
          role="presentation"
          onClick={() =>
            this.setState({
              isSidebarExpanded: true
            })
          }
        >
          <ArrowForwardIosRoundedIcon />
        </Button>
      </div>
      <div className="list">
        <List>
          <div className="listitem">
            <ListItem button>
              <AccountBoxRoundedIcon fontSize="large" />
            </ListItem>
          </div>
          <Divider style={styles.dividerlow} />
          <div className="listitem">
            <ListItem button>
              <DeveloperBoardRoundedIcon fontSize="large" />
            </ListItem>
          </div>
          <Divider style={styles.dividerlow} />
          <div className="listitem">
            <ListItem button>
              <MessageRoundedIcon fontSize="large" />
            </ListItem>
          </div>
          <Divider style={styles.dividerlow} />
          <div className="listitem">
            <ListItem button>
              <SettingsRoundedIcon fontSize="large" />
            </ListItem>
          </div>
          <Divider style={styles.dividerlow} />
        </List>
      </div>
    </div>
  ); // after button click, isSidebarExpanded => true
  render() {
    const { isSidebarExpanded } = this.state;
    return (
      <div className="app">
        {isSidebarExpanded && this.sidebarExpanded()}
        {isSidebarExpanded || this.sidebarCollapsed()}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  member: state.members.member,
})

export default connect(mapStateToProps)(Sidebar);
