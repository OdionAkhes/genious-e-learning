/** @format */

// OpenedChat.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../features/messagesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons";

function OpenedChat({ chat }) {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");
  const messages = chat ? chat.messages : [];

const handleSendMessage = () => {
  if (messageText.trim() !== "") {
    dispatch(
      sendMessage({
        chatId: chat.id,
        messageText: messageText,
        uid: "user1", // Replace with actual user's uid
        name: "John Doe", // Replace with actual user's name
        profilePictureUrl: "https://example.com/user1.jpg", // Replace with actual user's profile picture URL
      })
    );
    setMessageText("");
  }
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
          <div className="h-64 bg-gray-200 mb-4">
            {/* Render the messages */}
            <div className="mb-2">
              <strong>{chat.uid}:</strong> {chat.text}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OpenedChat;
