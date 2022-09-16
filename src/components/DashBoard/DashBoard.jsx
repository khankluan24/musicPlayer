import { useState, useRef, useEffect, createContext, useContext } from "react";

import "./DashBoard.scss";
import { IndexContext } from "~/App";
import "../../App.scss";
import Control from "./Control";
import CD from "./CD";

export const DashBoardContext = createContext();

function DashBoard({ data, songList }) {
  const audioRef = useRef("");
  const progressRef = useRef("");
  const [nextBtn, setNextBtn] = useState(null);

  const App = useContext(IndexContext);


  const handleSeeking = (e) => {
    if (e.target.value === 100) {
      audioRef.current.pause();
    } else {
      const seekTime = (audioRef.current.duration / 100) * e.target.value;
      audioRef.current.currentTime = seekTime;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    App.isPlaying ? audioRef.current.play() : audioRef.current.pause();

    audioRef.current.onended = () => {
      if (App.currentIndex === songList.length - 1) {
        audioRef.current.pause();
      } else if (App.isRepeat) {
        audioRef.current.play();
      } else {
        console.log(456);
        nextBtn.click();
      }
    };

    // Show progress's status
    audioRef.current.ontimeupdate = () => {
      const progressPercent = Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      if (audioRef.current.duration) {
        progressRef.current.value = progressPercent;
      }
    };

  }, [
    audioRef,
    progressRef,
    App.isPlaying,
    nextBtn,
    songList.length,
    App.currentIndex,
    App.isRepeat
  ]);


  return (
    <div className="dashboard">
      <header>
        <h4>Now playing:</h4>
        <h2>{data.name}</h2>
      </header>
      <DashBoardContext.Provider value={{ nextBtn, setNextBtn }}>
        <CD image={data.image} />
        <Control
          songList={songList}
        />
      </DashBoardContext.Provider>
      <input
        id="progress"
        ref={progressRef}
        className="progress"
        onChange={handleSeeking}
        type="range"
        defaultValue={0}
        step={1}
        min={0}
        max={100}
      />
      <audio id="audio" ref={audioRef} src={data.path} />
    </div>
  );
}

export default DashBoard;
