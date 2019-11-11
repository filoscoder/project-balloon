import React, { Component } from "react";
import Chatlistitem from './Chatlistitem';
import "./chatlist.css";

import {Button,List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar,Typography} from "@material-ui/core";

const styles = {
  divider: {
    backgroundColor: "black",
    width: "300px"
  }
};



    const Chatlist = ({ room, name }) => (
      <div className="chatlist">
        <div className="list">
          <List>
            <div className="listitem">
              <ListItem>
               <ListItemText primary="Recent" />
              </ListItem>
            </div>
            <Divider style={styles.divider} />
            <div className="listitem">
              <ListItem>
                <ListItemText primary="New Chat" />
                <Button>plus</Button>
              </ListItem>
            </div>
            <Divider style={styles.divider} />
            <Chatlistitem room={room} name={name}/>
          </List>
        </div>
      </div>
    );
 
export default Chatlist;
