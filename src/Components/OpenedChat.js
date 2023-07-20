/** @format */

// OpenedChat.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage as sendMessageAction } from "../features/messagesSlice";

import SendMessage from "./SendMessage";


function OpenedChat({ chat }) {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
const allMessages = useSelector((state) => state.messages.messages);

    useEffect(() => {
      if (chat) {
        const chatMessages = allMessages.filter(
          (message) => message.chatId === chat.id
        );
        setMessages(chatMessages);
      }
    }, [chat, allMessages]);


  const handleSendMessage = (message) => {
    dispatch(
      sendMessageAction({
        chatId: chat.id,
        ...message,
      })
    );
    setMessages((prevMessages) => [...prevMessages, message]);
  };



  return (
    <div className="p-4">
      {!chat ? (
        <div className="text-gray-500">Select a chat to open</div>
      ) : (
        <>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={chat.profilePic}
              className="w-10 h-10 rounded-full bg-gray-200"
              alt="Profile"
            />
            {/* Placeholder for profile picture */}

            <div>
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-gray-500">
                {chat.createdAt
                  ? chat.createdAt.toDate().toLocaleTimeString()
                  : ""}
              </p>
            </div>
          </div>
          <div className="h-96  mb-4">
            {/* Render the messages */}
            <div className="mb-2 p-4 bg-[#FAFAFB] w-80">
              {chat.text}
            </div>
          </div>
          <SendMessage />
        </>
      )}
    </div>
  );
}

export default OpenedChat;
