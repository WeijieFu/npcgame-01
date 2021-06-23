import React from "react";
import "../styles/loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__wrapper">
        <img
          className="start__background"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616420398/background_3x_b623c176b6.png"
          alt="background"
        />
        <img
          className="loading__loader"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_cow_3x_5bc9942397.png"
          alt="loader"
        />
        <div className="loading__text">Loading</div>
      </div>
    </div>
  );
};

export default Loading;
