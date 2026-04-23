import { Checkbox, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { setFilterShowDiscountItems } from "../../redux/slices/homeSlice";

const NewCheckbox = styled(Checkbox)(() => ({
  padding: 6,
}));

const CheckedIcon = styled("span")({
  width: 36,
  height: 36,
  borderRadius: 6,
  backgroundColor: "#0D50FF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",

  "& svg": {
    fontSize: 24,
  },
});
const UncheckedIcon = styled("span")({
  width: 36,
  height: 36,
  border: "2px solid #E0E0E0",
  borderRadius: 6,
  backgroundColor: "#fff",
});

function CustomCheckbox() {
  const { filterShowDiscountedItems } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();
  return (
    <NewCheckbox
      checked={filterShowDiscountedItems}
      onChange={(e) => dispatch(setFilterShowDiscountItems(e.target.checked))}
      icon={<UncheckedIcon />}
      checkedIcon={
        <CheckedIcon>
          <CheckIcon style={{ fontSize: 24 }} />
        </CheckedIcon>
      }
    />
  );
}

export default CustomCheckbox;
