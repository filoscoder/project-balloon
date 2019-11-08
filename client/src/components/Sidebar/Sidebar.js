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

import { Link } from 'react-router-dom';

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
  state = {
    isSidebarExpanded: true
  }; // sidebar initial state

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
            <Link to="/Login" style={{ textDecoration: 'none', color: 'white' }}>
              <ListItem button>
                <AccountBoxRoundedIcon fontSize="large" />
                <div className="listitemtext">
                  <ListItemText primary="Accounts" />
                </div>
              </ListItem>
            </Link>
          </div>
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
            <ListItem button>
              <MessageRoundedIcon fontSize="large" />
              <div className="listitemtext">
                <ListItemText primary="Messges" />
              </div>
            </ListItem>
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

export default Sidebar;
