import React, { useEffect, useRef, useState } from "react";
import "../styles/feedback.css";
import "../styles/result.css";
// var wx;
// if (typeof window !== `undefined`) {
//   wx = require("weixin-js-sdk");
// }
import { getCoupon, updateCoupon } from "../api/coupon";

import GSAP from "gsap";
import ButtonBlue from "./ButtonBlue";
import Link from "./Link";

const Result = ({
  score,
  result,

  setPage,
  player,
  setPlayer,
  currentLevel,
  link,
  setLink,
  restart,
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dbLinks = {
    level1:
      "https://www.dropbox.com/sh/w2xtxrrld35g797/AACjxXfzVD7NqD78Hu2PPjQya?dl=0 ",
    level2:
      "https://www.dropbox.com/sh/vi1m9ybegxa0zzw/AACrLR_sHGb3y8tjS4dbEocYa?dl=0",
    level3:
      "https://www.dropbox.com/sh/itidgegzih4dpgz/AAC-BUPUoxXvl5yALKylwaBHa?dl=0",
    level4:
      "https://www.dropbox.com/sh/23w09uesn5jvxfg/AAD6KV34HYEnp1RRk1Ee0PdQa?dl=0",
  };

  const [coupon, setCoupon] = useState({
    current: undefined,
    total: undefined,
  });
  const updateScore = () => {
    if (currentLevel == 0) {
      setPlayer({
        ...player,
        scoreLevel1: score,
        score: parseInt(player.score) + parseInt(score),
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 1) {
      setPlayer({
        ...player,
        scoreLevel2: score,
        score: parseInt(player.score) + parseInt(score),
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 2) {
      setPlayer({
        ...player,
        scoreLevel3: score,
        score: parseInt(player.score) + parseInt(score),
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 3) {
      setPlayer({
        ...player,
        scoreLevel4: score,
        score: parseInt(player.score) + parseInt(score),
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 4) {
      setPlayer({
        ...player,
        scoreLevel5: score,
        score: parseInt(player.score) + parseInt(score),
        currentLevel: currentLevel + 1,
      });
    }
  };

  useEffect(async () => {
    const res = await getCoupon(currentLevel + 1);
    setCoupon({ current: res.current, total: res.total });
  }, []);
  useEffect(() => {
    if (score > 75) {
      updateScore();
    }
    if (result.isShow) {
      GSAP.fromTo(container.current, { scale: 0 }, { scale: 1, duration: 0.3 });
    } else {
      GSAP.fromTo(container.current, { scale: 1 }, { scale: 0, duration: 0.1 });
    }
  }, [result.isShow]);
  const container = useRef();

  return (
    <div className="feedback" ref={container}>
      <div className="feedback__wrapper">
        {score > 75 && (
          <div>
            <div className="feedback__title">????????????</div>
            <div className="feedback__score">+{score}%</div>
            <div className="feedback__bracket">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="231.693"
                height="86.97"
                viewBox="0 0 231.693 86.97"
              >
                <g transform="translate(-73.058 -150)">
                  <path
                    d="M13925.251,3498h-10.693v81.97h10.693"
                    transform="translate(-13839 -3345.5)"
                    fill="none"
                    stroke="#b4fe4d"
                    strokeWidth="5"
                  />
                  <path
                    d="M10.693,0H0V81.97H10.693"
                    transform="translate(302.251 234.47) rotate(180)"
                    fill="none"
                    stroke="#b4fe4d"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </div>

            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1626290575/coupon_3x_c2bad0899d.png"
              alt="next planet"
              className="result__next"
            />

            <div className="result__explanation--title">
              {coupon.current > 0 && (
                <p>
                  ???????????????OBB????????? <br /> ???????????????????????????OBB????????????
                  <br /> ??????????????????{`${coupon.current}/${coupon.total}`}
                  {currentLevel == 3 && (
                    <>
                      <br />
                      ???????????????????????????????????????????????????
                      <br />
                      ????????????????????????????????????????????????
                    </>
                  )}
                </p>
              )}

              {coupon.current <= 0 && (
                <p>
                  ???????????????????????????????????????????????????????????????????????????????????????
                  {currentLevel == 3 && (
                    <>
                      <br />
                      ???????????????????????????????????????????????????
                      <br />
                      ????????????????????????????????????????????????
                    </>
                  )}
                </p>
              )}
            </div>
            <div
              className="result__button--ranking"
              onTouchEnd={() => {
                if (!hasSubmitted) {
                  if (coupon.current > 0) {
                    updateCoupon(currentLevel + 1, {
                      ...coupon,
                      current: coupon.current - 1,
                    });
                  }

                  setPage("ranking");
                  setHasSubmitted(true);
                } else {
                  setPage("ranking");
                }
              }}
            >
              <ButtonBlue text={"?????????"} />
            </div>
            <div
              className="result__button--download"
              onTouchEnd={() => {
                if (!hasSubmitted) {
                  if (coupon.current > 0) {
                    updateCoupon(currentLevel + 1, {
                      ...coupon,
                      current: coupon.current - 1,
                    });
                  }
                  // updateScore();
                  setHasSubmitted(true);
                }

                //??????dropbox??????
                if (currentLevel == 0) {
                  updateScore();
                  window.open(dbLinks.level1);
                }
                if (currentLevel == 1) {
                  updateScore();
                  window.open(dbLinks.level2);
                }
                if (currentLevel == 2) {
                  updateScore();
                  window.open(dbLinks.level3);
                }
                if (currentLevel == 3) {
                  setLink({ isShow: !link.isShow });
                }
              }}
            >
              <ButtonBlue
                text={currentLevel == 3 ? "??????live??????" : "????????????"}
              />
            </div>
          </div>
        )}

        {score < 75 && (
          <div>
            <div className="feedback__title feedback__title--negative">
              ????????????
            </div>
            <div className="feedback__score feedback__score--negative ">
              +{score}%
            </div>
            <div className="feedback__bracket">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="231.693"
                height="86.97"
                viewBox="0 0 231.693 86.97"
              >
                <g transform="translate(-73.058 -150)">
                  <path
                    d="M13925.251,3498h-10.693v81.97h10.693"
                    transform="translate(-13839 -3345.5)"
                    fill="none"
                    stroke="#FF8B4D"
                    strokeWidth="5"
                  />
                  <path
                    d="M10.693,0H0V81.97H10.693"
                    transform="translate(302.251 234.47) rotate(180)"
                    fill="none"
                    stroke="#ff8b4d"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </div>

            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623761767/fail_3x_a92065de41.png"
              alt="next planet"
              className="result__rocket"
            />
            <div className="result__explanation--title result__explanation--title--negative">
              ???????????????????????????
            </div>
            {player.lifeLeft < 1 && (
              <div className="result__explanation--text">
                ????????????????????????????????????
              </div>
            )}

            <div
              className="result__button--ranking"
              onTouchEnd={() => {
                if (player.lifeLeft >= 1) {
                  setPage("chooselevel");
                } else {
                  if (player.hasSubscribed) {
                    setPlayer({ ...player, lifeLeft: 2 });
                  } else {
                    window.alert("???????????????????????????");
                  }
                }
              }}
            >
              <ButtonBlue text={player.lifeLeft >= 1 ? "??????" : "????????????"} />
            </div>
            <div
              className="result__button--download"
              onTouchEnd={() => {
                if (player.lifeLeft >= 1) {
                  setPlayer({ ...player, lifeLeft: player.lifeLeft - 1 });
                  // setPage(`level${currentLevel + 1}`);

                  restart();
                } else {
                  setLink({ isShow: !link.isShow });
                  // window.open(
                  //   "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MjMyODE1Nw==&scene=124#wechat_redirect"
                  // );
                  // wx.updateAppMessageShareData({
                  //   title: "Hi", // ????????????
                  //   desc: "Hello", // ????????????
                  //   link: "https://www.aptamil-training-series.com", // ??????????????????????????????????????????????????????????????????????????????JS??????????????????
                  //   imgUrl:
                  //     "https://res.cloudinary.com/duykdzv1k/image/upload/v1624363519/aptaclub_de_product_stage_2_105110181b.jpg", // ????????????
                  //   success: function () {
                  //     // ????????????
                  //     setPlayer({ ...player, lifeLeft: 2 });
                  //   },
                  // });
                }
              }}
            >
              <ButtonBlue
                text={player.lifeLeft >= 1 ? "????????????" : "???????????????"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
