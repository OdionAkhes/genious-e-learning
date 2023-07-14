/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../features/firebase"; 
import {
  collection,
  getDocs,
  addDoc,
 
} from "firebase/firestore";


export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async ({  messageText, uid, name, profilePictureUrl }) => {
    // Add a new document to the `messages` collection
    const docRef = await addDoc(collection(db, "messages"), {
      text: messageText,
      uid: uid, // Replace with the actual user's UID
      name: name, // Replace with the actual user's name
      profilePictureUrl: profilePictureUrl, // Replace with the actual user's profile picture URL
      createdAt: new Date(), // Current date and time
    });
    return docRef.id;
  }
);
export const fetchChats = createAsyncThunk("messages/fetchChats", async () => {
  const messagesSnapshot = await getDocs(collection(db, "messages"));
  const messages = [];
  messagesSnapshot.forEach((doc) => {
    messages.push({ id: doc.id, ...doc.data() });
  });
  return messages;
});

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    selectedChat: null, // You might want to rename this to `selectedMessage`
    messages: [],
    status: "idle",
    error: null,
  },
  reducers: {
    selectChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    //... more reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Here you can update the local state if you want to,
        // but it's not necessary because `fetchChats` will update the state
        // with the latest data from Firestore
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectChat} = messagesSlice.actions;
export default messagesSlice.reducer;
