import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageComponent from "./components/imageComponent";
import ListsComponent from "../../vite-project/src/components/lists";
import ParagraphsComponent from "./components/paragraphsComponent";
import VideoComponent from "./components/videoComponent";

function App() {
  return (
    <div>
      <ImageComponent></ImageComponent>
      <ListsComponent />
      <ParagraphsComponent />
      <VideoComponent />
    </div>
  );
}

export default App;
