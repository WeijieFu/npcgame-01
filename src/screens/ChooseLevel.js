import React, { useState, useEffect } from "react";
import "../styles/chooselevel.css";

import Button from "../components/Button";
import Label from "../components/Label";

import { getQuestion } from "../api/question";
const ChooseLevel = (props) => {
  const [selected, setSelected] = useState(0);
  const [isLevelActive, setIsLevelActive] = useState({
    level1: true,
    level2: false,
    level3: false,
    level4: false,
    level5: false,
  });
  const [openDate, setOpenDate] = useState({
    level1: "",
    level2: "",
    level3: "",
    level4: "",
    level5: "",
  });
  const handleBack = () => {
    props.setPage("start");
  };
  const handleNext = () => {
    if (isLevelActive[`level${selected + 1}`]) {
      if (props.player.currentLevel > selected) {
        window.alert("您已经离开了这个星球");
        props.setPage("ranking");
      } else if (props.player.currentLevel == selected) {
        props.setPage(`level${selected + 1}`);
      } else {
        window.alert("请从前一个星球收集能量");
      }
    } else {
      window.alert(`这个星球将于${openDate[`level${selected + 1}`]}开启`);
    }
  };
  useEffect(async () => {
    const res1 = await getQuestion(1);
    const res2 = await getQuestion(2);
    const res3 = await getQuestion(3);
    const res4 = await getQuestion(4);
    const res5 = await getQuestion(5);
    setIsLevelActive({
      level1: res1.isActive,
      level2: res2.isActive,
      level3: res3.isActive,
      level4: res4.isActive,
      level5: res5.isActive,
    });
    setOpenDate({
      level1: res1.openDate,
      level2: res2.openDate,
      level3: res3.openDate,
      level4: res4.openDate,
      level5: res5.openDate,
    });
  }, []);
  return (
    <div className="chooselevel">
      <div className="chooselevel__wrapper">
        <img
          className="chooselevel__background"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623329064/levels_background_3x_13dcb55c89.png"
          alt="background"
        />
        <img
          className="chooselevel__path"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623329638/levels_path_3x_05d06bb1bb.png"
          alt="path"
        />

        <div className="chooselevel__back" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.521"
            height="32.042"
            viewBox="0 0 18.521 32.042"
          >
            <path
              d="M11910.827,3413.593l-12.485,12.485,12.485,12.485"
              transform="translate(-11895.842 -3410.057)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="chooselevel__title">选择目的地</div>

        <div className="chooselevel__planet--1">
          <span>
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_earth_3x_a9d0f92f21.png"
              alt="planet earth"
              className="chooselevel__planet--planet"
              onTouchEnd={() => {
                setSelected(0);
              }}
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330203/levels_bear_3x_8f54689536.png"
              alt="planet earth"
              className="chooselevel__planet--bear"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330203/levels_rocket_3x_e18c0072f7.png"
              alt="planet earth"
              className="chooselevel__planet--rocket"
            />
          </span>
          <span className="chooselevel__planet--label">
            {selected === 0 && (
              <Label
                text={"白熊家园"}
                active={isLevelActive.level1}
                date={openDate.level1}
              />
            )}
          </span>
        </div>

        <div className="chooselevel__planet--2">
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_cow_3x_5bc9942397.png"
            alt="planet cow"
            className="chooselevel__planet--planet"
            onTouchEnd={() => {
              setSelected(1);
            }}
          />
          {isLevelActive.level2 && (
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623331579/planet_bear_2_3x_c8f0b69990.png"
              alt="planet cow"
              className="chooselevel__planet--bear"
            />
          )}
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330203/levels_rocket_3x_e18c0072f7.png"
            alt="planet cow"
            className="chooselevel__planet--rocket"
          />

          <span className="chooselevel__planet--label">
            {selected === 1 && (
              <Label
                text={"奶牛王国"}
                active={isLevelActive.level2}
                date={openDate.level2}
              />
            )}
          </span>
        </div>

        <div className="chooselevel__planet--3">
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_bottle_3x_55aec0babb.png"
            alt="planet bottle"
            className="chooselevel__planet--planet"
            onTouchEnd={() => {
              setSelected(2);
            }}
          />
          {isLevelActive.level3 && (
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623332811/planet_bear_4_3x_29d68b5e7d.png"
              alt="planet bottle"
              className="chooselevel__planet--bear"
            />
          )}
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330203/levels_rocket_3x_e18c0072f7.png"
            alt="planet bottle"
            className="chooselevel__planet--rocket"
          />

          <span className="chooselevel__planet--label">
            {selected === 2 && (
              <Label
                text={"成长之星"}
                active={isLevelActive.level3}
                date={openDate.level3}
              />
            )}
          </span>
        </div>

        <div className="chooselevel__planet--4">
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_lab_3x_ff0d26a512.png"
            alt="planet lab"
            className="chooselevel__planet--planet"
            onTouchEnd={() => {
              setSelected(3);
            }}
          />
          {isLevelActive.level4 && (
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623331860/planet_bear_3_3x_592072882c.png"
              alt="planet lab"
              className="chooselevel__planet--bear"
            />
          )}
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330203/levels_rocket_3x_e18c0072f7.png"
            alt="planet lab"
            className="chooselevel__planet--rocket"
          />
          <span className="chooselevel__planet--label">
            {selected === 3 && (
              <Label
                text={"制造者基地"}
                active={isLevelActive.level4}
                date={openDate.level4}
              />
            )}
          </span>
        </div>

        <div className="chooselevel__planet--5">
          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_spaceship_3x_0e65bcf9a1.png"
            alt="planet lab"
            className="chooselevel__planet--planet"
            onTouchEnd={() => {
              setSelected(4);
            }}
          />

          <img
            src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330203/levels_rocket_3x_e18c0072f7.png"
            alt="planet lab"
            className="chooselevel__planet--rocket"
          />
          <span className="chooselevel__planet--label">
            {selected === 4 && (
              <Label
                text={"代购官号"}
                active={isLevelActive.level5}
                date={openDate.level5}
              />
            )}
          </span>
        </div>

        <div className="choosecharacter__next" onTouchEnd={handleNext}>
          <Button text={"确认"} />
        </div>
      </div>
    </div>
  );
};

export default ChooseLevel;
