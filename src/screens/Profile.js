import React, { useState, useEffect } from "react";
import "../styles/profile.css";

import Button from "../components/Button";
import Material from "../components/Material";

const Profile = ({ setPage, player }) => {
  const [material, setMaterial] = useState(true);
  const [active, setActive] = useState(false);
  const profileLinks = {
    level1: {
      0: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624547707/profile_level1_character0_2x_acdeb4165a.png",
      1: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624547707/profile_level1_character1_2x_124a2ccda0.png",
      2: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624547707/profile_level1_character2_2x_5cab701e44.png",
    },
    level2: {
      0: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983014/profile_level2_character0_3x_acf87b8891.png",
      1: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983014/profile_level2_character1_3x_219f205e28.png",
      2: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983013/profile_level2_character2_3x_e9227cf2cc.png",
    },
    level3: {
      0: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983010/profile_level3_character0_3x_332718da08.png",
      1: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983010/profile_level3_character1_3x_e98f05bfeb.png",
      2: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983010/profile_level3_character2_3x_5804b13bb5.png",
    },
    level4: {
      0: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983002/profile_level4_character0_3x_feb567de42.png",
      1: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983002/profile_level4_character1_3x_6ffe773198.png",
      2: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983002/profile_level4_character2_3x_d8b3151b18.png",
    },
    level5: {
      0: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983002/profile_level5_character0_3x_2ae7e3afa2.png",
      1: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983002/profile_level5_character1_3x_aee90ba057.png",
      2: "https://res.cloudinary.com/duykdzv1k/image/upload/v1624983002/profile_level5_character2_3x_21398e478d.png",
    },
  };

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <img
          className="profile__background"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623329064/levels_background_3x_13dcb55c89.png"
          alt="background"
        />
        <div className="profile__title">我的</div>
        <div className="profile__icons">
          <span className="profile__icon">
            <span className="profile__icon--img">
              <img
                src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_earth_3x_a9d0f92f21.png"
                alt="earth"
              />
            </span>
            <span className="profile__icon--dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={player.currentLevel > 0 ? "#b4fe4d" : "#fff"}
                />
              </svg>
            </span>
          </span>

          <span className="profile__icon">
            <span className="profile__icon--img">
              <img
                src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_cow_3x_5bc9942397.png"
                alt="cow"
              />
            </span>
            <span className="profile__icon--dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={player.currentLevel > 1 ? "#b4fe4d" : "#fff"}
                />
              </svg>
            </span>
          </span>

          <span className="profile__icon">
            <span className="profile__icon--img">
              <img
                src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623854600/planet_bottle_profile_03ecf3c01b.png"
                alt="bottle"
              />
            </span>
            <span className="profile__icon--dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={player.currentLevel > 2 ? "#b4fe4d" : "#fff"}
                />
              </svg>
            </span>
          </span>

          <span className="profile__icon">
            <span className="profile__icon--img">
              <img
                src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_lab_3x_ff0d26a512.png"
                alt="lab"
              />
            </span>
            <span className="profile__icon--dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={player.currentLevel > 3 ? "#b4fe4d" : "#fff"}
                />
              </svg>
            </span>
          </span>

          <span className="profile__icon">
            <span className="profile__icon--img">
              <img
                src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_spaceship_3x_0e65bcf9a1.png"
                alt="spaceship"
              />
            </span>
            <span className="profile__icon--dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={player.currentLevel > 4 ? "#b4fe4d" : "#fff"}
                />
              </svg>
            </span>
          </span>
        </div>
        <div className="profile__text">{`成功解锁${
          parseInt(player.currentLevel) + 1
        }颗星球，距离你和白熊宝宝登上飞船还有${
          4 - player.currentLevel
        }关 `}</div>
        <div className="profile__img">
          <img
            src={
              profileLinks[`level${player.currentLevel}`][`${player.character}`]
            }
            alt="player"
          />
        </div>
        <div className="profile__buttonContainer">
          <span
            onTouchEnd={() => {
              setPage("chooselevel");
            }}
          >
            <Button text={"下一个星球"} />
          </span>
          <span
            onTouchEnd={() => {
              setActive(!active);
            }}
          >
            <Button text={"下载素材"} />
          </span>
        </div>
        {material && (
          <div className="">
            <Material player={player} active={active} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
