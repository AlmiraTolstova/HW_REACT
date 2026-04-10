import { useDispatch, useSelector } from "react-redux";
import { playPause, setTime } from "../../redux/slices/playerSlice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

function Player() {
  const dispatch = useDispatch();

  // playPause
  const isPlaying = useSelector((state) => state.player.isPlaying);

  //   setTime
  const currentTime = useSelector((state) => state.player.currentTime);
  const maxTime = useSelector((state) => state.player.maxTime);
  return (
    <div>
      <Stack spacing={2} alignItems="center">
        <Button variant="contained" onClick={() => dispatch(playPause())}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Stack>

      <Slider
        value={currentTime}
        min={0}
        max={maxTime}
        onChange={(event, value) => dispatch(setTime(value))}
      ></Slider>
    </div>
  );
}

export default Player;
