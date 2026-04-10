import { useDispatch, useSelector } from "react-redux";
import {
  playPause,
  setTime,
  changeVolume,
} from "../../redux/slices/playerSlice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Player() {
  const dispatch = useDispatch();

  // playPause
  const isPlaying = useSelector((state) => state.player.isPlaying);

  //   setTime
  const currentTime = useSelector((state) => state.player.currentTime);
  const maxTime = useSelector((state) => state.player.maxTime);

  // changeVolume
  const volume = useSelector((state) => state.player.volume);

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
    </Box>
  );
}

export default Player;
