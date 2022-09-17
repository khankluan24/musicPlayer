import { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faStepBackward,
  faPause,
  faPlay,
  faStepForward,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

import { IndexContext } from "~/App";
import { DashBoardContext } from "~/components/DashBoard/DashBoard";
import "./DashBoard.scss";
import "../../App.scss";

function Control(props) {

  const App = useContext(IndexContext);
  const DashBoard = useContext(DashBoardContext);

  const nextBtn = useRef("");
  const prevBtn = useRef("");
  const repeatBtn = useRef("");

  const randomBtn = () => `btn btn-random ${App.isRandom ? "active" : ""}`;
  const repeatBtnClass = () => `btn btn-repeat ${App.isRepeat ? "active" : ""}`;

  useEffect(() => {
    DashBoard.setNextBtn(nextBtn.current);
  }, [nextBtn, prevBtn, DashBoard]);

  // Handle Buttons
  const handleRepeat = () => {
    App.setIsRepeat(!App.isRepeat);
  };

  const handlePrev = () => {
    if (App.isRandom) {
      App.playRandomSong();
    } else {
      if (App.currentIndex <= 0) {
        App.setCurrentIndex(props.songList.length);
        App.setCurrentIndex((prev) => prev - 1);
      } else {
        App.setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  const handleTrigger = () => {
    App.setIsPlaying(!App.isPlaying)
  };

  const handleNext = () => {
    if (App.isRandom) {
      App.playRandomSong();
    } else {
      App.setCurrentIndex((prev) => prev + 1);
      if (App.currentIndex === props.songList.length - 1) {
        App.setCurrentIndex(0);
      }
    }
  };

  const handleRandom = () => {
    App.setIsRandom(!App.isRandom);
  };

  return (
    <div className="control">
      <div
        onClick={() => handleRepeat()}
        ref={repeatBtn}
        className={repeatBtnClass()}
      >
        <FontAwesomeIcon className="icon" icon={faRedo} />
      </div>
      <div onClick={() => handlePrev()} ref={prevBtn} className="btn btn-prev">
        <FontAwesomeIcon className="icon" icon={faStepBackward} />
      </div>
      <div onClick={() => handleTrigger()} className="btn btn-toggle-play">
        {!App.isPlaying ? (
          <FontAwesomeIcon className="icon icon-play" icon={faPlay} />
        ) : (
          <FontAwesomeIcon className="icon icon-pause" icon={faPause} />
        )}
      </div>
      <div onClick={() => handleNext()} ref={nextBtn} className="btn btn-next">
        <FontAwesomeIcon className="icon" icon={faStepForward} />
      </div>
      <div onClick={() => handleRandom()} className={randomBtn()}>
        <FontAwesomeIcon className="icon" icon={faRandom} />
      </div>
    </div>
  );
}

export default Control;
