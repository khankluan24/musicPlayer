import { useState, useRef } from "react";


import "./DashBoard.scss";
import "../../App.scss";


import Control from "./Control";
import {default as music} from '~/assets/music'
import Header from "./Header";
import CD from "./CD";
function DashBoard() {
  // const [play, setPlay] =
  const audioRef = useRef("");
console.log()
  return (
    <div className="dashboard">
      <Header />
      <CD />
      <Control />
      <input
        id="progress"
        onChange={() => audioRef.current.play()}
        className="progress"
        type="range"
        defaultValue={0}
        step={1}
        min={0}
        max={100}
      />
      <audio id="audio" ref={audioRef} src={music.song1} />
    </div>
  );
}

export default DashBoard;
