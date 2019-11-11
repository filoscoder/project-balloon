import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// import TextContainer from '../TextContainer/TextContainer';
import Messages from "./Messages/Messages";
import InfoBar from "./InfoBar/InfoBar";
import Input from "./Input/Input";


//import material-ui component
import Grid from "@material-ui/core/Grid";


import "./chat.css";

// socket
let socket;

// material ui styles def


const Chat = ({ chats, location }) => {

  // "name","room"의 상태 값 정의
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatlists, setChatlists] = useState([]);

  const ENDPOINT = "http://localhost:5000"; //server 주소


  // react-hook, componentDidMount, componentDidUpdate 역할



  //when render
  useEffect(() => {

    if (location.search) {
      const { name, room } = queryString.parse(location.search); //url param으로 부터 name/room 구하기.
      console.log("location url 확인 ", location.search) // url parameter


      socket = io(ENDPOINT); // servers socket 연결
      console.log(socket)
      setRoom(room);
      setName(name);


      chats.map(chat => {
        if (chat.room_id === room) {
          setUsers(chat.users)
          setMessages(chat.messages)
        }
      })


      socket.emit("join", { name, room }, error => {
        console.log("client join 실행", name, room)
        if (error) {
          alert(error);
        }
      });

      socket.on("message", message => {
        setMessages([]);
      });

      // socket.on("roomData", ({ users }) => {
      //   setUsers(users);
      // });

    }

  }, [location]); // Endpoint와 location.search가 변경될때만 use effect/ rerender

  useEffect(() => {
    if (location.search) {
      socket.on("message", message => {
        setMessages([...messages, message]);
      });

      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });

      return () => {
        socket.emit("disconnect");

        socket.off();
      };
    }

  }, [messages]);




  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
    console.log("chat/message,messages=>", message, "/", messages);
    console.log("chat/name=>", name)

  };



  return (


    <div className="chat_messageContainer">
      <Grid container spacing={1} height="100%">
        <Grid item xs={12} height="15%">
          <InfoBar className="infobar" room={room} xs={12} />
        </Grid>
        <Grid item xs={12} height="70%">
          <Messages className="messages" messages={messages} name={name} />
        </Grid>
        <Grid item xs={12} height="15%">
          <Input
            className="input"
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage} />
        </Grid>
      </Grid>
    </div>
    // </div>
  );
};

export default Chat;

