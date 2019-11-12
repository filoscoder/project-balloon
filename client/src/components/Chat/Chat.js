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
import { connect } from "react-redux";
import { get_chatlist } from '../../store/actions/Chat/chatList'

// socket
let socket;

// material ui styles def


const Chat = ({ chats, location, get_chatlist }) => {

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
    get_chatlist(name)
    console.log(chats)
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

      // socket.on("message", message => {
      //   setMessages([]);
      // });

      // socket.on("roomData", ({ users }) => {
      //   setUsers(users);
      // });

    }

  }, [location]); // Endpoint와 location.search가 변경될때만 use effect/ rerender

  useEffect(() => {
    if (location.search) {
      socket.on("message", message => {
        setMessages([...messages, message]);
        updateMessge(room, message)

      });
      console.log("message emit", message)
      get_chatlist(name)
      console.log(chats)


      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });

      return () => {
        socket.emit("disconnect");

        socket.off();
      };
    }

  }, [messages]);


  const updateMessge = (roomid, message) => {
    fetch(`/api/messageUpdate/${roomid}`,
      {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: "same-origin",
        credentials: 'include',
        body: JSON.stringify(message)
      })
      .then(res => console.log(res))
  }

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }


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

const mapStateToProps = state => ({
  chats: state.chats,
})

const dispatchToProps = (dispatch) => ({

  get_chatlist: (member_id) => {
    dispatch(get_chatlist(member_id))
    console.log("dispatch : get_chatlist =>", member_id)
  },

})

export default connect(mapStateToProps, dispatchToProps)(Chat);

