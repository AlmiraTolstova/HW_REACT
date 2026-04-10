import { useDispatch, useSelector } from "react-redux";
import {
  playPause,
  setTime,
  changeVolume,
  toggleMute,
  nextRepeatMode,
  setPlaybackRate,
  seekForward,
  seekBackward,
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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

  const playbackRate = useSelector((state) => state.player.playbackRate);

  return (
    <Box>
      <Button variant="contained" onClick={() => dispatch(playPause())}>
        {isPlaying ? "Pause" : "Play"}
      </Button>

      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ mr: 2 }}>
          {" "}
          setTime{" "}
        </Typography>
        <Slider
          value={currentTime}
          min={0}
          max={maxTime}
          onChange={(event, value) => dispatch(setTime(value))}
        ></Slider>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ mr: 2 }}>
          {" "}
          changeVolume{" "}
        </Typography>
        <Slider
          value={volume}
          min={0}
          max={100}
          onChange={(e, value) => dispatch(changeVolume(value))}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ mr: 2 }}>
          {" "}
          toggleMute{" "}
        </Typography>
        <IconButton onClick={() => dispatch(toggleMute())}>
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ mr: 2 }}>
          nextRepeatMode
        </Typography>
        <IconButton onClick={() => dispatch(nextRepeatMode())}>
          {repeatMode === "none" && <RepeatIcon />}
          {repeatMode === "one" && <RepeatOneIcon />}
          {repeatMode === "all" && <RepeatOnIcon />}
        </IconButton>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ mr: 2 }}>
          Playback Rate
        </Typography>

        <FormControl>
          <InputLabel id="rate-label">Speed</InputLabel>

          <Select
            labelId="rate-label"
            value={playbackRate}
            label="Speed"
            onChange={(e) => dispatch(setPlaybackRate(Number(e.target.value)))}
          >
            <MenuItem value={0.5}>0.5x</MenuItem>
            <MenuItem value={0.75}>0.75x</MenuItem>
            <MenuItem value={1}>1x</MenuItem>
            <MenuItem value={1.25}>1.25x</MenuItem>
            <MenuItem value={1.5}>1.5x</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography variant="h5">Seek Backward</Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => dispatch(seekBackward(5))}>
            -5s
          </Button>

          <Button variant="outlined" onClick={() => dispatch(seekBackward(10))}>
            -10s
          </Button>

          <Button variant="outlined" onClick={() => dispatch(seekBackward(30))}>
            -30s
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h5">Seek Forward</Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => dispatch(seekForward(5))}>
            +5s
          </Button>

          <Button variant="outlined" onClick={() => dispatch(seekForward(10))}>
            +10s
          </Button>

          <Button variant="outlined" onClick={() => dispatch(seekForward(30))}>
            +30s
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Player;
