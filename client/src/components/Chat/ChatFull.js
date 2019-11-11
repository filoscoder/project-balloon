import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// import TextContainer from '../TextContainer/TextContainer';

import Chatlist from "./Chatlist/Chatlist";
import Chat from "./Chat";



import "./chatfull.css";

// socket
// let socket;

// material ui styles def
const styles = {

}

const ChatFull = ({ location }) => {

    // "name","room"의 상태 값 정의
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    // const [users, setUsers] = useState("");
    // const [message, setMessage] = useState("");
    // const [messages, setMessages] = useState([]);
    // const [chatlists, setChatlists] = useState([]);

    // const ENDPOINT = "http://localhost:5000"; //server 주소


    // react-hook, componentDidMount, componentDidUpdate 역할



    //when render
    // useEffect(() => {

    //     if (location.search) {
    //         const { name, room } = queryString.parse(location.search); //url param으로 부터 name/room 구하기.
    //         // console.log("location url 확인 ", location.search) // url parameter


    //         socket = io(ENDPOINT); // servers socket 연결

    //         setRoom(room);
    //         setName(name);

    //         socket.emit("join", { name, room }, error => {
    //             if (error) {
    //                 alert(error);
    //             }
    //         });
    //     }

    // }, [ENDPOINT, location.search]); // Endpoint와 location.search가 변경될때만 use effect/ rerender

    // useEffect(() => {
    //     if (location.search) {
    //         socket.on("message", message => {
    //             setMessages([...messages, message]);
    //         });

    //         socket.on("roomData", ({ users }) => {
    //             setUsers(users);
    //         });

    //         return () => {
    //             socket.emit("disconnect");

    //             socket.off();
    //         };
    //     }

    // }, [messages]);

    // // useEffect(() => {
    // //   getChatList('홍길자')


    // //   console.log("getChatList  후 state", chatlists.length, chatlists)



    // // }, [chatlists]);


    // const sendMessage = event => {
    //     event.preventDefault();

    //     if (message) {
    //         socket.emit("sendMessage", message, () => setMessage(""));
    //     }
    //     console.log("chat/message,messages=>", message, "/", messages);
    //     console.log("chat/name=>", name)

    // };

    // const getChatList = (memberid) => {

    //   console.log("chat getChatList")
    //   fetch(`/api/chats/${memberid}`)
    //     .then(function (response) {
    //       return response.json()
    //     })
    //     .then(function (myJson) {
    //       console.log(myJson)
    //       if (chatlists.length === 0) {
    //         return (setChatlists(myJson))
    //       }
    //     })

    // }

    // const renderChatList = () => {
    //   console.log("renderChatList", chatlists.length, chatlists)
    //   if (chatlists.length !== 0) {

    //   } else return null
    // }


    return (
        <Router>
            <div className="chat_outerContainer">

                <div className="chat_chatlistContainer">
                    <Chatlist room={room} name={name} />
                </div>
                <Route path='/chat' component={Chat} />
                {/* <Route path='/chat'  component={Chat} /> */}

            </div>
        </Router>
    );
};

export default ChatFull;

