import React from "react";
import "../styles/ranking.css";

const Ranking = () => {
  return (
    <div className="ranking">
      <div className="ranking__wrapper">
        <img
          className="ranking__background"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623329064/levels_background_3x_13dcb55c89.png"
          alt="background"
        />

        <div className="ranking__title">排行榜</div>
      </div>
    </div>
  );
};

export default Ranking;
