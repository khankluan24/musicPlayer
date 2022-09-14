import "../../App.scss";
import "./PlayList.scss";
import Thumb from "./Thumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import Body from "./Body";
function PlayList() {
  return (
    <div className="playlist">
      <div className="song">
        <Thumb />
        <Body />
        <div className="option">
          <FontAwesomeIcon className="icon" icon={faEllipsisH} />
        </div>
      </div>
    </div>
  );
}

export default PlayList;
