import { useDispatch, useSelector } from "react-redux";
import {
  playPause,
  setTime,
  changeVolume,
  toggleMute,
  nextRepeatMode,
} from "../../redux/slices/playerSlice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";

function Player() {
  const dispatch = useDispatch();

  // playPause
  const isPlaying = useSelector((state) => state.player.isPlaying);

  //   setTime
  const currentTime = useSelector((state) => state.player.currentTime);
  const maxTime = useSelector((state) => state.player.maxTime);

  // changeVolume
  const volume = useSelector((state) => state.player.volume);

  //   toggleMute
  const isMuted = useSelector((state) => state.player.isMuted);

  //   nextRepeatMode
  const repeatMode = useSelector((state) => state.player.repeatMode);

  return (
    <Box>
      <Button variant="contained" onClick={() => dispatch(playPause())}>
        {isPlaying ? "Pause" : "Play"}
      </Button>

      <Box>
        <Typography variant="h5"> setTime </Typography>
        <Slider
          value={currentTime}
          min={0}
          max={maxTime}
          onChange={(event, value) => dispatch(setTime(value))}
        ></Slider>
      </Box>
      <Box>
        <Typography variant="h5"> changeVolume </Typography>
        <Slider
          value={volume}
          min={0}
          max={100}
          onChange={(e, value) => dispatch(changeVolume(value))}
        />
      </Box>
      <Box>
        <Typography variant="h5"> toggleMute </Typography>
        <IconButton onClick={() => dispatch(toggleMute())}>
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      </Box>

      <Box>
        <Typography variant="h5">nextRepeatMode</Typography>
        <IconButton onClick={() => dispatch(nextRepeatMode())}>
          {repeatMode === "none" && <RepeatIcon />}
          {repeatMode === "one" && <RepeatOneIcon />}
          {repeatMode === "all" && <RepeatOnIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Player;
