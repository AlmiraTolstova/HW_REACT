import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ProfilePlayground() {
  const [profileSettings, setProfileSettings] = useState({
    name: "Anna",
    surname: "Ivanova",
  });
  return <div></div>;
}
export default ProfilePlayground;
