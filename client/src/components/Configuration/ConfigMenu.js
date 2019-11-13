import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import LockIcon from "@material-ui/icons/Lock";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

class ConfigMenu extends React.Component {
  render() {
    return (
      <Card>
        <List>
          {/* MENU 0: App's general preferences */}
          <Link
            to="/config"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="General settings" />
            </ListItem>
          </Link>
          <Divider />

          {/* MENU 1: Change user's password */}
          <Link
            to="/passwdchange"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary="Change password" />
            </ListItem>
          </Link>
          <Divider />

          {/* MENU 2: User logout session */}
          <Link to="/reqlogout" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </Card>
    );
  }
}

export default ConfigMenu;
