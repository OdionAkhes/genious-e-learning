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
          placeholder="Search "
          className="p-2  bg-[#F8F8FB] rounded-lg w-full text-sm "
        />
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
            <div className="flex justify-between gap-2">
              <h3 className=" text-sm">{chat.name}</h3>
              <p className="text-gray-500 text-xs">{chat.lastMessageTime}</p>
            </div>

            <p className="text-gray-500 text-xs">{chat.lastMessagePreview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
