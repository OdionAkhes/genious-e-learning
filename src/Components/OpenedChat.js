/** @format */

// OpenedChat.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../features/messagesSlice";
import { Picker } from "emoji-mart";
// to use the emoji picker
// import "emoji-mart/css/emoji-mart.css"; // for emoji picker styles
import { faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function OpenedChat({ chat }) {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");
  const messages = chat ? chat.messages : [];
  const [showEmojis, setShowEmojis] = useState(false);
  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      dispatch(sendMessage({ chatId: chat.id, messageText }));
      setMessageText("");
    }
  };
const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSendMessage();
  }
};


  const addEmoji = (e) => {
    let emoji = e.native;
    setMessageText(messageText + emoji);
  };

  const sendAttachment = () => {};


  return (
    <div className="p-4 pb-0  flex flex-col justify-between h-full max-h-screen">
      {!chat ? (
        <div className="text-gray-500">Select a chat to open</div>
      ) : (
        <>
          <div className="flex items-center justify-between   sticky">
            <div className="flex items-center justify-between space-x-4  ">
              <img
                src={chat.profilePicture}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className=" text-[#102844]">{chat.name}</h3>
                <p className="text-[#767278] text-sm ">{chat.status}</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <circle cx="18" cy="18" r="18" fill="#F8F8FB" />
                <g opacity="0.4">
                  <path
                    d="M18 18.75C17.5858 18.75 17.25 18.4142 17.25 18C17.25 17.5858 17.5858 17.25 18 17.25C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75Z"
                    fill="#102844"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 13.5C17.5858 13.5 17.25 13.1642 17.25 12.75C17.25 12.3358 17.5858 12 18 12C18.4142 12 18.75 12.3358 18.75 12.75C18.75 13.1642 18.4142 13.5 18 13.5Z"
                    fill="#102844"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 24C17.5858 24 17.25 23.6642 17.25 23.25C17.25 22.8358 17.5858 22.5 18 22.5C18.4142 22.5 18.75 22.8358 18.75 23.25C18.75 23.6642 18.4142 24 18 24Z"
                    fill="#102844"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className=" overflow-y-auto  max-h-[70vh]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex  mb-2 ${
                  message.sender === "You"
                    ? "flex-row-reverse  ml-auto"
                    : "mr-auto"
                }`}
              >
                {message.sender !== "You" && (
                  <div className="pr-2">
                    <img
                      src={chat.profilePicture}
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
          <div className="flex items-center space-x-2 mb-4 ">
            <div className="relative w-full flex items-center bg-[#FAFAFB] rounded-lg h-14">
              <button
                onClick={sendAttachment}
                className="items-center gap-3 flex absolute text-gray-400 hover:text-gray-600 left-3 top-1/2 transform -translate-y-1/2"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M16.9499 8.74447L9.58342 16.1109C8.68098 17.0134 7.457 17.5203 6.18075 17.5203C4.90451 17.5203 3.68053 17.0134 2.77808 16.1109C1.87564 15.2085 1.36865 13.9845 1.36865 12.7082C1.36865 11.432 1.87564 10.208 2.77808 9.30557L10.1445 1.93913C10.7462 1.3375 11.5621 0.999512 12.413 0.999512C13.2638 0.999512 14.0798 1.3375 14.6814 1.93913C15.283 2.54076 15.621 3.35675 15.621 4.20758C15.621 5.05841 15.283 5.8744 14.6814 6.47603L7.30696 13.8425C7.00615 14.1433 6.59815 14.3123 6.17274 14.3123C5.74732 14.3123 5.33933 14.1433 5.03852 13.8425C4.7377 13.5417 4.5687 13.1337 4.5687 12.7082C4.5687 12.2828 4.7377 11.8748 5.03852 11.574L11.8439 4.77669"
                      stroke="#102844"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="20"
                    viewBox="0 0 1 20"
                    fill="none"
                  >
                    <line
                      opacity="0.5"
                      x1="0.5"
                      y1="0.5"
                      x2="0.499999"
                      y2="19.5"
                      stroke="#102844"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </button>

              <input
                value={messageText}
                type="text"
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-sm px-4 pl-12 pr-20 w-full h-full  bg-[#FAFAFB]"
                placeholder="Type a message..."
              />
              <button
                onClick={() => setShowEmojis(!showEmojis)}
                className="absolute text-gray-400 hover:text-gray-600 right-10 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                      stroke="#102844"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.2002 9.40015C5.2002 9.40015 6.2502 10.8001 8.0002 10.8001C9.7502 10.8001 10.8002 9.40015 10.8002 9.40015"
                      stroke="#102844"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.8999 5.90015H5.9069"
                      stroke="#102844"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.1001 5.90015H10.1071"
                      stroke="#102844"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
              {showEmojis ? (
                <span className="absolute right-0 top-0 transform translate-y-full">
                  <Picker onSelect={addEmoji} />
                </span>
              ) : null}
              <button
                onClick={handleSendMessage}
                className="absolute  text-white rounded-lg right-3 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                >
                  <path
                    d="M22.9995 5.51105L12.1926 21.3593L10.8037 12.5523L3.87114 6.94598L22.9995 5.51105Z"
                    fill="#4C6FFF"
                    stroke="#4C6FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.9982 5.51027L10.8389 12.6759"
                    stroke="#4C6FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OpenedChat;
