import React, { useEffect, useRef } from "react";
import "../styles/start.css";
import { TweenMax, Power3 } from "gsap";

import Button from "../components/Button";

const Start = (props) => {
  /**
   * Init
   */
  const manual = useRef();

  /**
   * Animation
   */
  const openManual = () => {
    console.log("open manual");
    TweenMax.to(manual.current, 0.2, {
      scaleX: 1,
      scaleY: 1,
      ease: Power3.easeOut,
    });
  };

  const closeManual = () => {
    console.log("close manual");
    TweenMax.to(manual.current, 0.2, {
      scaleX: 0,
      scaleY: 0,
      ease: Power3.easeOut,
    });
  };

  const startGame = () => {
    console.log("start game");
    //if user has character -> choose level
    if (props.player.character === "") {
      props.setPage("choosecharacter");
    } else {
      // if user doesn't have character -> choose character
      props.setPage("chooselevel");
    }
  };

  return (
    <div className="start">
      <img
        className="start__background"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616420398/background_3x_b623c176b6.png"
        alt="background"
      />

      <img
        className="start__title"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616408614/title_3x_67c36e8ec8.png"
        alt="title"
      />

      <div className="start__text">
        <p>
          带着白熊宝宝寻找Aptamil有机星球 <br />
          成为<strong>Aptamil认证代购官</strong>
          <br />
          赢取<strong>首单免费和更多大礼</strong>
        </p>
      </div>

      <img
        className="start__planet start__planet--1"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_earth_3x_a9d0f92f21.png"
        alt="earth"
      />
      <img
        className="start__planet start__planet--2"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_milkbottle_3x_231688a131.png"
        alt="milkbottle"
      />
      <img
        className="start__planet start__planet--3"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_cow_3x_c68b36b8d1.png"
        alt="cow"
      />

      <img
        className="start__planet start__planet--4"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616414929/rocket_3x_a8245d30ef.png"
        alt="rocket"
      />

      <img
        className="start__planet start__planet--5"
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/whitebear_3x_a531362891.png"
        alt="whitebear"
      />

      <div className="start__buttonContainer">
        <span onTouchEnd={openManual}>
          <Button text={"游戏说明"} />
        </span>
        <span onTouchEnd={startGame}>
          <Button text={"开始游戏"} />
        </span>
      </div>

      <div className="start__manual" ref={manual}>
        <div className="start__manual--close" onTouchEnd={closeManual}>
          <svg height="24" width="24">
            <line
              x1="0"
              y1="0"
              x2="24"
              y2="24"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="0"
              y1="24"
              x2="24"
              y2="0"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="start__manual--content">This is game manual</div>
      </div>
    </div>
  );
};

export default Start;
