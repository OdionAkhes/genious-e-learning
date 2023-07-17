/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../features/firebase"; // Import your Firestore instance
import { collection, getDocs } from "firebase/firestore";

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
    messages: [], // Rename `chats` to `messages`
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
      });
  },
});

export const { selectChat, sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
