import React, { useState, useEffect } from "react";
import Chatlistitem from './Chatlistitem';
import "./chatlist.css";

import { Button, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";

const styles = {
  divider: {
    backgroundColor: "black",
    width: "300px"
  }
};



const Chatlist = ({ chats }) => {

  // const [chatlists, setChatlists] = useState([]);

  // useEffect(() => {
  //   getChatList('홍길자')


  //   //console.log("getChatList  후 state", chatlists.length, chatlists)



  // }, [chatlists]);

  // const getChatList = (memberid) => {

  //   console.log("chat getChatList")
  //   fetch(`/api/chats/${memberid}`)
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       // console.log(myJson)
  //       if (chatlists.length === 0) {
  //         return (setChatlists(myJson))
  //       }
  //     })

  // }

  return (

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
          {chats.length !== 0 ? chats.map(chatroom => <Chatlistitem key={chatroom.room_id} room={chatroom.room_id} name='홍길자' />) : null}
          {/* <Chatlistitem room={room} name={name}/> */}
        </List>
      </div>
    </div>
  )

};

export default Chatlist;
