/** @format */

// messagesSlice.js
import { createSlice } from "@reduxjs/toolkit";

function getCurrentTimestamp() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timestamp = `${hours}:${minutes}`;
  return timestamp;
}

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    selectedChat: null,
    chats: [
      {
        id: 1,
        name: "Esther Howard",
        profilePicture: "../assets/AI.png",
        lastMessagePreview: "Hello, how are you?",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "Hello!",
            sender: "Esther Howard",
            timestamp: "10:30 AM",
          },
          {
            id: 2,
            text: "Hi, I'm doing well. How about you?",
            sender: "You",
            timestamp: "10:32 AM",
          },
      
        ],
      },
      {
        id: 2,
        name: "cindy Fisher",
        profilePicture: "../assets/bell.svg",
        lastMessagePreview: "Are you free tomorrow?",
        lastMessageTime: "11:45 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "Hey, do you have any plans for tomorrow?",
            sender: "cindy Fisher",
            timestamp: "11:30 AM",
          },
          {
            id: 2,
            text: "No plans yet. What's up?",
            sender: "You",
            timestamp: "11:32 AM",
          },

        ],
      },

    ],
  },
  reducers: {
    selectChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    sendMessage: (state, action) => {
      const { chatId, messageText } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatId);
      if (chat) {
        const newMessage = {
          id: chat.messages.length + 1,
          text: messageText,
          sender: "You",
          timestamp: getCurrentTimestamp(),
        };
        chat.messages.push(newMessage);
      }
    },
  },
});

export const { selectChat, sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
