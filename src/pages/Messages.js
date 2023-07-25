/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectChat, sendMessage } from "../features/messagesSlice";
import ChatList from "../Components/ChatList";
import OpenedChat from "../Components/OpenedChat";

function MessagesPage() {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");
  const selectedChat = useSelector((state) => state.messages.selectedChat);
  const chats = useSelector((state) => state.messages.chats);

  const handleChatSelect = (chat) => {
    dispatch(selectChat(chat));
  };

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      dispatch(sendMessage(selectedChat.id, messageText));
      setMessageText("");
    }
  };
   useEffect(() => {
     if (chats && chats.length > 0) {
       handleChatSelect(chats[0]);
     }
   }, [chats]);

  return (
    <div className="gap-3 flex p-4 flex-col md:flex-row h-screen bg-[#F5F7F9]">
      <div className="w-full md:w-1/3  bg-white rounded-lg ">
        <ChatList chats={chats} onSelectChat={handleChatSelect} />
      </div>
      <div className="w-full md:w-2/3  bg-white rounded-lg ">
        <OpenedChat
          chat={selectedChat}
          messageText={messageText}
          setMessageText={setMessageText}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default MessagesPage;
