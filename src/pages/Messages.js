/** @format */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChats, selectChat, sendMessage } from "../features/messagesSlice";
import ChatList from "../Components/ChatList";
import OpenedChat from "../Components/OpenedChat";

function MessagesPage() {
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.messages.selectedChat);
const messages = useSelector((state) => state.messages.messages);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const handleChatSelect = (chat) => {
    dispatch(selectChat(chat));
  };

  const handleSendMessage = (messageText) => {
    if (messageText.trim() !== "") {
      dispatch(sendMessage({ chatId: selectedChat.id, messageText }));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/3 border-r border-gray-200">
        <ChatList chats={messages} onSelectChat={handleChatSelect} />
      </div>
      <div className="w-full md:w-2/3">
        <OpenedChat chat={selectedChat} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default MessagesPage;
