import { useDispatch, useSelector } from "react-redux";
import { playPause } from "../../redux/slices/playerSlice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
function Player() {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.player.isPlaying);

  return (
    <div>
      <Stack spacing={2} alignItems="center">
        <Button variant="contained" onClick={() => dispatch(playPause())}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Stack>
    </div>
  );
}

export default Player;
