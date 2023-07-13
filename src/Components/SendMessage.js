/** @format */

import { useState } from "react";
import { db } from "../features/firebase"; // Import your Firestore instance
import { collection, addDoc } from "firebase/firestore";

const SendMessage = () => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const messagesCollection = collection(db, "messages");
    await addDoc(messagesCollection, {
      text: messageText,
      uid: "user's uid", // replace with the actual user's uid
      createdAt: new Date(),
    });
    setMessageText("");
  };

  return (
    <form onSubmit={sendMessage} className="flex">
      <input
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type your message"
        className="w-full rounded-l-xl p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r-xl p-2">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
