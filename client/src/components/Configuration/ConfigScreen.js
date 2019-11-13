import React, { Component } from "react";
import "./configStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ConfigMenu from "./ConfigMenu";
import Options from "./Options";
import Typography from "@material-ui/core/Typography";
import PasswdChange from "./PasswdChange";
import LogOut from "./LogOut";

class ConfigScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            selectedMenu: ""
        };
    }
    
    handleClick = e => {
        let wichMenu = e.relatedEvent
        console.log(wichMenu)
        return (wichMenu)
    }
    render() {
        return (
            <div className="layout-container">
            <Router>
          <div className="menu-list">
            <div className="menu-top">
              <Typography variant="h5">Settings</Typography>
            </div>
            
            <div className="menu" onClick={event => this.handleClick(event)}>
              <ConfigMenu />
            </div>
          </div>
          <div className="preferences">
            <div className="options">
                <Switch>
                  <Route exact path="/config" component={Options} />
                  <Route path="/passwdchange" component={PasswdChange} />
                  <Route path="/reqlogout" component={LogOut} />
                </Switch>
            </div>
          </div>
          </Router>
        </div>
        )
    }
}


export default ConfigScreen;
