/** @format */

// ChatList.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ChatList({ onSelectChat }) {
  const [searchText, setSearchText] = useState("");
  const messages = useSelector((state) => state.messages.messages);

  const filteredChats = messages.filter((message) =>
    message.uid.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex items-center space-x- mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search "
          className="text-xs p-2 text-[#767278] border border-gray-300 rounded-lg w-full"
        />
      
      </div>

      {filteredChats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center space-x-4 py-4 cursor-pointer"
          onClick={() => onSelectChat(chat)}
        >
      
          <img
            src={chat.profilePic}
            className="w-12 h-12 rounded-full bg-gray-200"
            alt="Profile"
          />

          <div className="">
            <div className="flex justify-between">
              <h3 className="text-sm text-[#102844]">{chat.name}</h3>
              <p className="text-[#767278] text-[10px]">
                {chat.createdAt.toDate().toLocaleTimeString()}
              </p>
            </div>

            <p className="text-[#767278] text-xs">{chat.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
