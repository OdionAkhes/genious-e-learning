/** @format */

import { useState } from "react";
import { db } from "../features/firebase"
import { collection, addDoc } from "firebase/firestore";

const SendMessage = () => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const messagesCollection = collection(db, "messages");
    await addDoc(messagesCollection, {
      text: messageText,
      uid: "user's uid", 
      createdAt: new Date(),
    });
    setMessageText("");
  };

  return (
    <form className="bg-[#FAFAFB] rounded p-4" onSubmit={sendMessage}>
      <input
        className="bg-[#FAFAFB] text-sm"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">
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
    </form>
  );
};

export default SendMessage;
