import React from "react";
import { Link } from "react-router-dom";

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






const Chatlistitem = ({ room, name }) => (

  <div className="listitem">
    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
      <ListItem button alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt="Minseok Oh"
          // src="ms.png"
          >{room[0]}</Avatar>
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
    </Link>
    <Divider style={styles.divider} />
  </div>
);

export default Chatlistitem;

