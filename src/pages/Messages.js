/** @format */

import React, { useState } from "react";
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

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/3 border-r border-gray-200">
        <ChatList chats={chats} onSelectChat={handleChatSelect} />
      </div>
      <div className="w-full md:w-2/3">
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
