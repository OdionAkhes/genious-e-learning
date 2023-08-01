/** @format */

import React from "react";

function ChatHistory({ messages, profilePicture }) {
  return (
    <div className=" overflow-y-auto  max-h-[70vh]">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex  mb-2 ${
            message.sender === "You" ? "flex-row-reverse  ml-auto" : "mr-auto"
          }`}
        >
          {message.sender !== "You" && (
            <div className="pr-2">
              <img
                src={profilePicture}
                alt={message.sender}
                className="w-10 mr-6 h-10 rounded-full "
              />
            </div>
          )}
          <div
            className={`p-3  ${
              message.sender === "You"
                ? "bg-[#4C6FFF] rounded-tl-lg rounded-tr-lg rounded-bl-lg  my-8 text-white"
                : "bg-[#F6F7F8] rounded-tl-lg rounded-tr-lg rounded-br-lg text-[#102844]"
            } max-w-sm`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;
