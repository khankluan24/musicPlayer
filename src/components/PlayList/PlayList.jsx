import { useContext } from "react";

import { IndexContext } from "~/App";
import "../../App.scss";
import "./PlayList.scss";
import Song from "./Song";

function PlayList({ data }) {
  const App = useContext(IndexContext);

  const renderSongs = () => {
    return data.map((song, index) => (
      <Song receiveData={song} key={index} songIndex={index} />
    ));
  };

  // Click song to play
  const playSong = (e) => {
    const songNode = e.target.closest(".song:not(.active)");
    if (songNode) {
      if (!e.target.closest(".option")) {
        App.setCurrentIndex(parseInt(songNode.dataset.index))
        App.setIsPlaying(true)
      } else {
        console.log("False");
      }
    }
  };

  return (
    <div className="playlist" onClick={(e) => playSong(e)}>
      {renderSongs()}
    </div>
  );
}

export default PlayList;
