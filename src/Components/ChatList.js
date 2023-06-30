/** @format */

// ChatList.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ChatList({ onSelectChat }) {
  const [searchText, setSearchText] = useState("");
  const chats = useSelector((state) => state.messages.chats);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search chats..."
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
        {/* Add "Add Chat" button */}
      </div>
      {/* Render the list of chats */}
      {filteredChats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center space-x-4 p-4 cursor-pointer"
          onClick={() => onSelectChat(chat)}
        >
          <img
            src={chat.profilePicture}
            alt={chat.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-gray-500">{chat.lastMessagePreview}</p>
            <p className="text-gray-500">{chat.lastMessageTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
