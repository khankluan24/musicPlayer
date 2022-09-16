import { useRef, useEffect, useState, useContext } from "react";
import { IndexContext } from "~/App";
import "./DashBoard.scss";

function CD({ image}) {
  const cdRef = useRef("");
  const cdThumbRef = useRef("");
  const imgUrl = (data) => `url(${data})`;
  const App = useContext(IndexContext);

  // Handel Scroll Y
  useEffect(() => {
    const cd = cdRef.current;
    const cdWidth = cd.offsetWidth;

    document.onscroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
  }, [cdRef]);

  // Handle CD spin
  useEffect(() => {
    const cdThumb = cdThumbRef.current;
    let cdThumbAnimate = cdThumb.animate(
      { transform: "rotate(360deg)" },
      {
        duration: 5000,
        iterations: Infinity,
      }
    );

    App.isPlaying ? cdThumbAnimate.play() : cdThumbAnimate.pause();
  }, [cdThumbRef, App.isPlaying]);

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
