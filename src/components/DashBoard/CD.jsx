import { useRef, useEffect, useContext } from "react";

import { IndexContext } from "~/App";
import "./DashBoard.scss";

function CD({ image }) {
  const cdRef = useRef("");
  const cdThumbRef = useRef("");
  const imgUrl = (data) => `url(${data})`;
  const App = useContext(IndexContext);

  useEffect(() => {
    const cd = cdRef.current;
    const cdWidth = cd.offsetWidth;
    // Handel Scroll Y
    document.onscroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Handle CD spin
    const delay = () => {
      if (App.isPlaying) {
        cdThumbRef.current.classList.add("rotate");
      } else {
        cdThumbRef.current.classList.remove("rotate");
      }
    };
    setTimeout(delay, 1000);
  }, [cdRef, cdThumbRef, App.isPlaying]);

  return (
    <div className="cd" ref={cdRef}>
      <div
        className="cd-thumb"
        ref={cdThumbRef}
        style={{
          backgroundImage: imgUrl(image),
        }}
      ></div>
    </div>
  );
}

export default CD;
