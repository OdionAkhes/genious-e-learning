/** @format */

// messagesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import estherImageSrc from "../assets/Ellipse 92.jpg";
import codyImageSrc from "../assets/Ellipse 92 (1).jpg";
import savImageSrc from "../assets/Ellipse 92 (2).jpg";
import robImageSrc from "../assets/Ellipse 92 (3).jpg";
import coopImageSrc from "../assets/Ellipse 92 (4).jpg";
import webbImageSrc from "../assets/Ellipse 92 (5).jpg";
import katImageSrc from "../assets/Ellipse 92 (6).jpg";
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
        profilePicture: estherImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
          },
        ],
      },
      {
        id: 2,
        name: "Cody Fisher",
        profilePicture: codyImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
          },
        ],
      },
      {
        id: 3,
        name: "Savannah Nguyen",
        profilePicture: savImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
          },
        ],
      },
      {
        id: 4,
        name: "Robert Fox",
        profilePicture: robImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
          },
        ],
      },
      {
        id: 5,
        name: "Bessie Cooper",
        profilePicture: coopImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
          },
        ],
      },
      {
        id: 6,
        name: "Theresa Webb",
        profilePicture: webbImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
          },
        ],
      },
      {
        id: 7,
        name: "Kathryn Murphy",
        profilePicture: katImageSrc,
        lastMessagePreview:
          "The passage experienced a surge in popularity during the…",
        lastMessageTime: "10:30 AM",
        status: "Online",
        messages: [
          {
            id: 1,
            text: "The passage experiences a surge",
            sender: "Esther Howard",
            timestamp: "8:10 AM",
          },
          {
            id: 2,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:10 AM",
          },
          {
            id: 3,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "9:15 AM",
          },
          {
            id: 4,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "Esther Howard",
            timestamp: "9:45 AM",
          },
          {
            id: 5,
            text: "Creation Ipsum is simply dummy text of the printing and typesetting industry. ",
            sender: "You",
            timestamp: "10:00 AM",
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
      const { chatId, messageText,files } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatId);
      if (chat) {
        const newMessage = {
          id: chat.messages.length + 1,
          text: messageText,
          sender: "You",
          timestamp: getCurrentTimestamp(),
          files: files || [],
        };
        chat.messages.push(newMessage);
      }
    },
  },
});

export const { selectChat, sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
