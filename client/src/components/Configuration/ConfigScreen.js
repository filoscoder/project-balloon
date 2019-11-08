import React, { Component } from 'react';
import './configStyle.css'
import ConfigMenu from './ConfigMenu'
import Options from './Options'
import Typography from '@material-ui/core/Typography';

class ConfigScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
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
                <div className="menu-list">
                    <div className="menu-top">
                        <Typography variant="h5">
                            Settings
                            </Typography>
                    </div>
                    <div className="menu" onClick={(event) => this.handleClick(event)}>
                        <ConfigMenu />
                    </div>
                </div>
                <div className="preferences">
                    <div className="options">
                        <Options />
                    </div>
                </div>

            </div>
        )
    }
}


export default ConfigScreen;
