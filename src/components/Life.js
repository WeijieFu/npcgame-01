import React from "react";
import "../styles/life.css";
const Life = ({ lifeLeft }) => {
  return (
    <div className="life">
      <div className="life__wrapper">
        <span className="life__text">剩余次数 </span>
        <span className="life__lifeLeft">{lifeLeft}x</span>
      </div>
    </div>
  );
};

export default Life;
