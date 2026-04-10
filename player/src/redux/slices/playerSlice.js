import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentTime: 0,
  maxTime: 180,
  volume: 50,
  isMuted: false,
  previousVolume: 50,
  playbackRate: 1,
  repeatMode: "none",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause(state) {
      state.isPlaying = !state.isPlaying;
    },
    setTime(state, action) {
      const time = action.payload;

      if (time < 0) {
        state.currentTime = 0;
      } else if (time > state.maxTime) {
        state.currentTime = state.maxTime;
      } else {
        state.currentTime = time;
      }
    },
  },
});

export const { playPause, setTime } = playerSlice.actions;
export default playerSlice.reducer;
