import React, { useEffect, useState, useRef } from "react";
import "../styles/start.css";
import { TweenMax, Power3 } from "gsap";

import { getManual } from "../api/manual";
import Button from "../components/Button";

const Start = (props) => {
  /**
   * Init
   */
  const manual = useRef();
  const [manualPage, setManualPage] = useState(0);
  const [manualText, setManualText] = useState();

  useEffect(async () => {
    const manualText = await getManual();
    setManualText(manualText);
  }, []);

  /**
   * Animation
   */
  const openManual = () => {
    setManualPage(0);
    TweenMax.to(manual.current, 0.2, {
      scaleX: 1,
      scaleY: 1,
      ease: Power3.easeOut,
    });
  };

  const closeManual = () => {
    TweenMax.to(manual.current, 0.2, {
      scaleX: 0,
      scaleY: 0,
      ease: Power3.easeOut,
    });
  };

  const startGame = () => {
    console.log("start game");

    // if user doesn't have character -> choose character
    console.log(props.player.character);
    if (props.player.character === null) {
      console.log("chooseCharacter");
      props.setPage("choosecharacter");
    } else {
      //if user has character -> choose level
      console.log("chooselevel");
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
        src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624269915/title_3x_f135daf484.png"
        alt="title"
      />

      <div className="start__text">
        <p>
          带着白熊宝宝寻找Aptamil爱他美星球 <br />
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
        <div className="start__manual--content">
          <div className="start__manual--title">游戏说明</div>
          <div className="start__manual--index">
            <span className="start__manual--index--dash">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="154.297"
                height="3"
                viewBox="0 0 154.297 3"
              >
                <path
                  d="M11507.688,4536.428h154.3"
                  transform="translate(-11507.688 -4534.928)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeDasharray="3"
                />
              </svg>
            </span>
            <span className="start__manual--index--icons">
              <span
                className={
                  manualPage === 0
                    ? "start__manual--index--icon--active start__manual--index--icon"
                    : "start__manual--index--icon"
                }
                onTouchEnd={() => {
                  setManualPage(0);
                }}
              >
                1
              </span>
              <span
                className={
                  manualPage === 1
                    ? "start__manual--index--icon--active start__manual--index--icon"
                    : "start__manual--index--icon"
                }
                onTouchEnd={() => {
                  setManualPage(1);
                }}
              >
                2
              </span>
              <span
                className={
                  manualPage === 2
                    ? "start__manual--index--icon--active start__manual--index--icon"
                    : "start__manual--index--icon"
                }
                onTouchEnd={() => {
                  setManualPage(2);
                }}
              >
                3
              </span>
              <span
                className={
                  manualPage === 3
                    ? "start__manual--index--icon--active start__manual--index--icon"
                    : "start__manual--index--icon"
                }
                onTouchEnd={() => {
                  setManualPage(3);
                }}
              >
                4
              </span>
            </span>
          </div>
          {manualPage === 0 && (
            <div className="start__manual--section">
              <div className="start__manual--section--img--1">
                <img
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624275141/manual_section_1_3x_041ad68add.png"
                  alt="section-1"
                  className="start__manual--section--img--1--img"
                />
                <img
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624275226/manual_section_1_cloud_1_3x_61cc05f6b2.png"
                  alt="section-1"
                  className="start__manual--section--img--1--cloud1"
                />
                <img
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624275226/manual_section_1_cloud_2_3x_8aa1ff8061.png"
                  alt="section-1"
                  className="start__manual--section--img--1--cloud2"
                />
                <img
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624275226/manual_section_1_cloud_3_3x_a7043d3f2c.png"
                  alt="section-1"
                  className="start__manual--section--img--1--cloud3"
                />
              </div>
              <span className="start__manual--section--text--gradient"></span>
              <div className="start__manual--section--text">
                {manualText && <p> {manualText.section_1}</p>}
              </div>
              <div
                className="start__manual--section--next"
                onTouchEnd={() => {
                  setManualPage(1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51.908"
                  height="27.454"
                  viewBox="0 0 51.908 27.454"
                >
                  <path
                    d="M11560.385,5048.182l23.833,23.833,23.833-23.833"
                    transform="translate(-11558.264 -5046.061)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          )}

          {manualPage === 1 && (
            <div className="start__manual--section">
              <div className="start__manual--section--img--1">
                <img
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624283154/manual_section_2_stars_3x_f08767f8fd.png"
                  alt="section-2"
                  className="start__manual--section--img--1--img"
                />
                <img
                  className="level__rocket start__manual--section--2--rocket"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623336710/level_rocket_3x_4fd82f1d9b.png"
                />
                <img
                  className="level__smoke--1"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623336709/level_smoke_3x_643277b51c.png"
                />
                <img
                  className="level__smoke--2"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623336709/level_smoke_3x_643277b51c.png"
                />
                <img
                  className="level__smoke--3"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623337505/level_smoke_mirror_3x_a032a01212.png"
                />
                <img
                  className="level__smoke--4"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623337505/level_smoke_mirror_3x_a032a01212.png"
                />
              </div>
              <span className="start__manual--section--text--gradient"></span>
              <div className="start__manual--section--text">
                {manualText && <p> {manualText.section_2}</p>}
              </div>
              <div
                className="start__manual--section--next"
                onTouchEnd={() => {
                  setManualPage(2);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51.908"
                  height="27.454"
                  viewBox="0 0 51.908 27.454"
                >
                  <path
                    d="M11560.385,5048.182l23.833,23.833,23.833-23.833"
                    transform="translate(-11558.264 -5046.061)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          )}

          {manualPage === 2 && (
            <div className="start__manual--section">
              <div className="start__manual--section--img--1">
                <img
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624283154/manual_section_2_stars_3x_f08767f8fd.png"
                  alt="section-2"
                  className="start__manual--section--img--3--img"
                />
                <img
                  className="start__manual__rocket start__manual--section--3--rocket--1"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624284336/manual_section_3_rocket_3x_4e40fef929.png"
                />
                <img
                  className="start__manual__rocket start__manual--section--3--rocket--2"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624284336/manual_section_3_rocket_3x_4e40fef929.png"
                />
                <img
                  className="start__manual__rocket start__manual--section--3--rocket--3"
                  src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624284336/manual_section_3_rocket_3x_4e40fef929.png"
                />

                <span className="start__manual--section--3--air--1"></span>
              </div>
              <span className="start__manual--section--text--gradient"></span>
              <div className="start__manual--section--text">
                {manualText && <p> {manualText.section_3}</p>}
              </div>
              <div
                className="start__manual--section--next"
                onTouchEnd={() => {
                  setManualPage(3);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51.908"
                  height="27.454"
                  viewBox="0 0 51.908 27.454"
                >
                  <path
                    d="M11560.385,5048.182l23.833,23.833,23.833-23.833"
                    transform="translate(-11558.264 -5046.061)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          )}

          {manualPage === 3 && (
            <div className="start__manual--section">
              <div className="start__manual--section--img--1">
                <span className="start__manual--section--3--air--1"></span>
              </div>
              <span className="start__manual--section--text--gradient"></span>
              <div className="start__manual--section--text start__manual--section--text--full">
                {manualText && <p> {manualText.section_4}</p>}
              </div>
              <div
                className="start__manual--section--next"
                onTouchEnd={closeManual}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51.908"
                  height="27.454"
                  viewBox="0 0 51.908 27.454"
                >
                  <path
                    d="M11560.385,5048.182l23.833,23.833,23.833-23.833"
                    transform="translate(-11558.264 -5046.061)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Start;
