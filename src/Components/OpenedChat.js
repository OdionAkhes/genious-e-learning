/** @format */

// OpenedChat.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../features/messagesSlice";


function OpenedChat({ chat }) {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");
  const messages = chat ? chat.messages : [];

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      dispatch(sendMessage({ chatId: chat.id, messageText }));
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
              src={chat.profilePicture}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-gray-500">{chat.status}</p>
            </div>
          </div>
          <div className=" mb-4">
            {/* Render the messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start mb-2 ${
                  message.sender === "You"
                    ? "flex-row-reverse ml-auto"
                    : "mr-auto"
                }`}
              >
                {message.sender !== "You" && (
                  <div className="pr-2">
                    <img
                      src={message.profilePicture}
                      alt={message.sender}
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                )}
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "You"
                      ? "bg-[#4C6FFF] text-white"
                      : "bg-[#F6F7F8] text-black"
                  } max-w-sm`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative w-full">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full h-20 p-2 border border-gray-300 rounded-lg pr-16"
                placeholder="Type your message..."
              ></textarea>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faPaperclip} />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faSmile} />
                </button>
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default OpenedChat;
