import React, { useState } from "react";
import "../styles/choosecharacter.css";

import ButtonRound from "../components/ButtonRound";
import Button from "../components/Button";

const ChooseCharacter = (props) => {
  const [characterIndex, setCharacterIndex] = useState(0);
  const handleBack = () => {
    props.setPage("start");
    console.log("click");
  };

  const handleLeft = () => {
    if (characterIndex > 0) {
      setCharacterIndex(characterIndex - 1);
    } else {
      setCharacterIndex(2);
    }
  };
  const handleRight = () => {
    if (characterIndex < 2) {
      setCharacterIndex(characterIndex + 1);
    } else {
      setCharacterIndex(0);
    }
  };
  const handleNext = () => {
    console.log("choose character");
    props.setPlayer({ character: characterIndex.toString() });
    props.setPage("chooselevel");
  };
  return (
    <div className="choosecharacter">
      <div className="choosecharacter__wrapper">
        <img
          className="choosecharacter__background"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616420398/background_3x_b623c176b6.png"
          alt="background"
        />
        <div className="choosecharacter__back" onClick={handleBack}>
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
        <div className="choosecharacter__title">选择角色</div>

        <div className="choosecharacter__character">
          {characterIndex === 0 && (
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623314160/character_m_3x_f3fbd67f4d.png"
              alt="male character"
              className="choosecharacter__character--m"
            />
          )}
          {characterIndex === 1 && (
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623314160/character_f_3x_5e05119acd.png"
              alt="female character"
              className="choosecharacter__character--f"
            />
          )}
          {characterIndex === 2 && (
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623314160/character_b_3x_1003a2ca25.png"
              alt="baby character"
              className="choosecharacter__character--b"
            />
          )}
        </div>
        <div className="choosecharacter__buttons">
          <span onTouchEnd={handleLeft}>
            <ButtonRound
              direction="left"
              className="chooseCharacter__button--left"
            />
          </span>
          <span onTouchEnd={handleRight}>
            <ButtonRound
              direction="right"
              className="chooseCharacter__button--right"
            />
          </span>
        </div>

        <div className="choosecharacter__next" onTouchEnd={handleNext}>
          <Button text={"下一步"} />
        </div>
      </div>
    </div>
  );
};

export default ChooseCharacter;
