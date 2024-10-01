import React, { useState, useEffect, useRef } from "react";
import {
  AppContainer,
  ChatContainer,
  ChatMessages,
  Message,
  InputContainer,
  Input,
  Button,
  Header,
} from "./Components/StyledComponents";
import { getApiData, postApiData } from "@/services/ApiService";
import UserList from "./Components/UserList";
import dayjs from "dayjs";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChatUser, setCurrentChatUser] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const socketRef = useRef(null);
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getApiData("/players/get-players");
      setUsers(response.players);
    };

    fetchUsers();
    const BASE_URL = "ws://my-squad-two.vercel.app/"; // Your API base URL

    socketRef.current = new WebSocket(BASE_URL);

    socketRef.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  const selectUser = (user) => {
    setCurrentChatUser(user);
    setMessages([]);
    fetchChatHistory(user._id);
  };

  const fetchChatHistory = async (otherUserId) => {
    const response = await postApiData("/chat/history", {
      currentUserId: player_id,
      otherUserId,
    });
    setMessages(response);
  };

  const sendMessage = () => {
    if (messageInput.trim() !== "" && currentChatUser) {
      const message = {
        senderId: player_id,
        receiverId: currentChatUser._id,
        text: messageInput,
      };
      socketRef.current.send(JSON.stringify(message));
      setMessageInput("");
    }
  };

  return (
    <AppContainer>
      {currentChatUser ? (
        <ChatContainer>
          <Header>
            <div
              onClick={() => setCurrentChatUser(null)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdOutlineArrowBackIos
                size={24}
                color="white"
                style={{ marginRight: "8px" }}
              />
            </div>
            <h2 style={{margin: 'auto'}}> {currentChatUser.name}</h2>
          </Header>
          <ChatMessages>
            {messages
              ?.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
              .reduce((acc, msg, index, arr) => {
                const messageDate = dayjs(msg.timestamp);
                const prevMessageDate =
                  index > 0 ? dayjs(arr[index - 1].timestamp) : null;

                if (
                  !prevMessageDate ||
                  messageDate.isSame(prevMessageDate, "day") === false
                ) {
                  acc.push(
                    <div
                      key={`date-${index}`}
                      style={{
                        margin: "10px 0",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#aaa",
                      }}
                    >
                      {messageDate.format("MMMM D, YYYY")}
                    </div>
                  );
                }

                acc.push(
                  <>
                    <Message key={index} isSender={msg.sender === player_id}>
                      <span style={{ wordBreak: "break-all" }}>
                        {msg.message}
                      </span>
                      <span style={{ fontSize: "10px" }}>
                        {messageDate?.format("HH:mm")} {/* Formatted time */}
                      </span>
                    </Message>
                  </>
                );

                return acc;
              }, [])}
          </ChatMessages>
          <InputContainer>
            <Input
              type="text"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button onClick={sendMessage}>Send</Button>
          </InputContainer>
        </ChatContainer>
      ) : (
        <UserList users={users} selectUser={selectUser} />
      )}
    </AppContainer>
  );
};

export default Chat;
