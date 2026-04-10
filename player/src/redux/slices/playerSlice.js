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

      if (vol !== 0) {
        state.previousVolume = vol;
      }

      state.volume = vol;
      state.isMuted = vol === 0;
    },
    toggleMute(state) {
      if (!state.isMuted) {
        if (state.volume !== 0) {
          state.previousVolume = state.volume;
        }

        state.volume = 0;
        state.isMuted = true;
      } else {
        state.volume = state.previousVolume;
        state.isMuted = false;
      }
    },
    nextRepeatMode(state) {
      if (state.repeatMode === "none") {
        state.repeatMode = "one";
      } else if (state.repeatMode === "one") {
        state.repeatMode = "all";
      } else {
        state.repeatMode = "none";
      }
    },
  },
});

export const { playPause, setTime, changeVolume, toggleMute, nextRepeatMode } =
  playerSlice.actions;
export default playerSlice.reducer;
