import { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { IndexContext } from "~/App";
import "./PlayList.scss";
import "~/App.scss";

function Song({ receiveData, songIndex }) {
  const songRef = useRef("");
  const App = useContext(IndexContext);

  const url = (data) => `url(${data})`;
  const songClass = `song ${App.currentIndex === songIndex ? "active" : ""}`;


  return (
    <div className={songClass} ref={songRef} data-index={songIndex} >
      <div
        className="thumb"
        style={{
          backgroundImage: url(receiveData.image),
        }}
      ></div>
      <div className="body">
        <h3 className="title">{receiveData.name} </h3>
        <p className="author">{receiveData.singer} </p>
      </div>
      <div className="option">
        <FontAwesomeIcon className="icon" icon={faEllipsisH} />
      </div>
    </div>
  );
}

export default Song;
