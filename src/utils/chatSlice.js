import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages.splice(250, 1)
      state.messages.unshift(action.payload);
    },
  },
});

export const {setMessage} = chatSlice.actions;
export default chatSlice.reducer;
