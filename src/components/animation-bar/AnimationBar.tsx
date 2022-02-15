import React from "react";
import "./AnimationBar.scss";
import tree from "../../assets/tree.png";
import train1 from "../../assets/train1.png";
import stickerManLeft from "../../assets/sticker-man-left.png";

const AnimationBar: React.FC<{}> = () => {
  // const christmasTree = Array.from(Array(6).keys());
  // const cactusDiv = Array.from(Array(6).keys());

  return (
    <div className="animation-bar">
      <img src={tree} alt="tree" className="pixel" />
      <div className="train left">
        <img src={train1} alt="train1" />
      </div>
      <div className="train right">
        <img src={train1} alt="train1" />
      </div>
      <div className="sticker-man">
        <img src={stickerManLeft} alt="stickerManLeft" />
      </div>
    </div>
  );
};

export default AnimationBar;
