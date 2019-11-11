import React from "react";

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";


const styles = {
    divider: {
      backgroundColor: "black",
      width: "300px"
    }
  };

const Chatlistitem =({room, name}) => (

    <div className="listitem">
    <ListItem button alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Minseok Oh"
        // src="ms.png"
        >{room}</Avatar>
      </ListItemAvatar>
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
            > 
            {room}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider style={styles.divider} />
  </div>
);

export default Chatlistitem;

