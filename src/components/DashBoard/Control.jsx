import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faStepBackward,
  faPause,
  faPlay,
  faStepForward,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

import "./DashBoard.scss";
import "../../App.scss";

function Control() {
  return (
    <div className="control">
      <div className="btn btn-repeat">
        <FontAwesomeIcon className="icon" icon={faRedo} />
      </div>
      <div className="btn btn-prev">
        <FontAwesomeIcon className="icon" icon={faStepBackward} />
      </div>
      <div className="btn btn-toggle-play">
        <FontAwesomeIcon className="icon icon-pause" icon={faPause} />
        <FontAwesomeIcon className="icon icon-play" icon={faPlay} />
      </div>
      <div className="btn btn-next">
        <FontAwesomeIcon className="icon" icon={faStepForward} />
      </div>
      <div className="btn btn-random">
        <FontAwesomeIcon className="icon" icon={faRandom} />
      </div>
    </div>
  );
}

export default Control;
