import React from "react";
import { css } from 'glamor';
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./messages.css";


const ROOT_CSS = css({
  // padding: 5% 0,
  flex: "auto",
  height: "570px",
  width: "100%"
});

const Messages = ({ messages, name }) => {
  console.log(messages)

  return (
    < ScrollToBottom className={ROOT_CSS} >
      {
        messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))
      }
    </ScrollToBottom >

  )

};

export default Messages;
