import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class ConfigMenu extends React.Component {
    
    render() {
        return (
            <Card>
                <List>
                    {/* MENU 0: Change user's password */}
                    <ListItem button name="menu0" >
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText primary="Change password" />
                    </ListItem>
                    <Divider />

                    {/* MENU 1: App's general preferences */}
                    <ListItem button name="menu1">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="General settings" />
                    </ListItem>
                    <Divider />

                    {/* MENU 2: User logout session */}
                    <ListItem button name="menu2">
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                    </ListItem>
                    <Divider />
                </List>
            </Card>
        )
    }
}

export default ConfigMenu;