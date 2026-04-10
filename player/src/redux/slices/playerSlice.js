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
    changeVolume(state, action) {
      let vol = action.payload;
      if (vol < 0) vol = 0;
      if (vol > 100) vol = 100;
      state.volume = vol;
      if (vol === 0) {
        state.isMuted = true;
      } else if (state.isMuted) {
        state.isMuted = false;
      }
    },
  },
});

export const { playPause, setTime, changeVolume } = playerSlice.actions;
export default playerSlice.reducer;
