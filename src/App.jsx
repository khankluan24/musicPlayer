import { useState, createContext} from "react";
import "./App.scss";

import { default as music } from "~/assets/music";
import DashBoard from "~/components/DashBoard/DashBoard";
import PlayList from "./components/PlayList/PlayList";

export const IndexContext = createContext();

function App() {
  const data = [
    {
      name: "Head of the table",
      singer: "Roman Reigns",
      path: music.song1,
      image:
        "https://i.ytimg.com/vi/n0QT_teLcNk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAt_bDSk-yhLbSzoUzcO4sFnQU_Ew",
    },
    {
      name: "Sign",
      singer: "Marcus James",
      path: music.song2,
      image:
        "https://i.ytimg.com/vi/IaGftzCkiNE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9yLJUqfO0EiG6DBxm9OEKVdYyug",
    },
    {
      name: "Bad Ideas",
      singer: "Alle Farben",
      path: music.song3,
      image:
        "https://i.ytimg.com/vi/FKvPHeqGlPU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQAybURH8NMhuoNQ6M8F1X0k7APw",
    },
    {
      name: "L'Amour Toujours",
      singer: "Gigi D'Agostino",
      path: music.song4,
      image: "https://i.ytimg.com/vi/G3uNcIJAQC4/0.jpg",
    },
    {
      name: "BARBIE GIRL (BOOMSOUNDS REMIX)",
      singer: "AQUA",
      path: music.song5,
      image: "https://i.ytimg.com/vi/RpRRtaM91eo/0.jpg",
    },
    {
      name: "Heroes",
      singer: "Coopex & New Beat Order",
      path: music.song6,
      image: "https://i.ytimg.com/vi/D3Gpryv7rHY/0.jpg",
    },
    {
      name: "Someone You Million Voices (Subsurface Mashup)",
      singer: "Otto Knows vs Lewis Capaldi",
      path: music.song7,
      image:
        "https://i.ytimg.com/vi/gWmUomg2HqM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALKl_UrGrmyCjKBycVjLfFJbKOSg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [scrollView, setScrollView] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playRandomSong = () => {
    let randomSong;
    do {
      randomSong = Math.floor(Math.random() * data.length);
    } while (randomSong === currentIndex);
    setCurrentIndex(randomSong);
  };
  return (
    <div className="player">
      <IndexContext.Provider
        value={{
          currentIndex,
          setCurrentIndex,
          isRepeat,
          setIsRepeat,
          playRandomSong,
          isRandom,
          setIsRandom,
          scrollView,
          setScrollView,
          isPlaying,
          setIsPlaying
        }}
      >
        <DashBoard data={data[currentIndex]} songList={data} />
        <PlayList data={data} />
      </IndexContext.Provider>
    </div>
  );
}

export default App;
