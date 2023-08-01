/** @format */

// ChatList.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ChatList({ onSelectChat, selectedChat }) {
  const [searchText, setSearchText] = useState("");
  const chats = useSelector((state) => state.messages.chats);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-4 overflow-y-auto h-full  no-scrollbar">
      <div className="flex justify-between px-1 mb-4">
        <h4>Message</h4>
        <button className="rounded-full bg-[#4C6FFF] text-white h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill="#4C6FFF" />
            <path
              d="M12 8.40002V15.6"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.3999 12H15.5999"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
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
          className={`flex items-center space-x-4 p-4 py-6 border-b cursor-pointer ${
            selectedChat && chat.id === selectedChat.id
              ? "bg-[rgb(245,247,255)]   rounded-lg border-b-0 text-[#102844]"
              : ""
          }`}
          onClick={() => onSelectChat(chat)}
        >
          <img
            src={chat.profilePicture}
            alt={chat.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex justify-between gap-2 align-center ">
              <h3 className=" text-sm mb-2">{chat.name}</h3>
              <p className="text-gray-500 text-xs">{chat.lastMessageTime}</p>
            </div>

            <div className="flex justify-between items-center">
              {" "}
            
              <p className="text-gray-500 text-xs `">{chat.lastMessagePreview}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                className="flex items-end"
                height="16"
                viewBox="0 0 10 6"
                fill="none"
              >
                <g opacity="0.6">
                  <g opacity="0.6">
                    <path
                      opacity="0.6"
                      d="M7.1 1L2.9 5L1 3.182"
                      stroke="#102844"
                      strokeWidth="0.762"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g opacity="0.6">
                    <path
                      opacity="0.6"
                      d="M9.00479 1L4.80479 5L2.90479 3.182"
                      stroke="white"
                      strokeWidth="1.143"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g opacity="0.6">
                    <path
                      opacity="0.6"
                      d="M9.00479 1L4.80479 5L2.90479 3.182"
                      stroke="#102844"
                      strokeWidth="0.762"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
