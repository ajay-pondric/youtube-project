import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    selectedVideo: null,
  },
  reducers: {
    setSelectedVideo: (state, action) => {
     state.selectedVideo = action.payload;
    },
  },
});

export const { setSelectedVideo } = videoSlice.actions;
export const selectSelectedVideo = (state) => state.video.selectedVideo;

export default videoSlice.reducer;
