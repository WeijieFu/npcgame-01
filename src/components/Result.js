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

const Result = ({
  score,
  result,
  setResult,
  setPage,
  player,
  setPlayer,
  currentLevel,
  setScore,
  setCurrentQuestion,
  restart,
}) => {
  const dbLinks = {
    level1:
      "https://www.dropbox.com/sh/g02qzoropysrhfx/AAC5W2TH62MGd9Vh91dmE_97a?dl=0",
    level2:
      "https://www.dropbox.com/sh/w9a20svgj6tp7u3/AADxadzcF_WH9534AEDws01Ta?dl=0",
    level3:
      "https://www.dropbox.com/sh/rox25caldcsxg3g/AAAabSscJNQoROgeDw83anDxa?dl=0",
    level4:
      "https://www.dropbox.com/sh/i4xwi7jc4gxe3ef/AAD1SueqD2bOr_HXw0wLq4B6a?dl=0",
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
        score: player.score + score,
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 1) {
      setPlayer({
        ...player,
        scoreLevel2: score,
        score: player.score + score,
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 2) {
      setPlayer({
        ...player,
        scoreLevel3: score,
        score: player.score + score,
        currentLevel: currentLevel + 1,
      });
    }
    if (currentLevel == 3) {
      setPlayer({
        ...player,
        scoreLevel4: score,
        score: player.score + score,
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
            <div className="feedback__title">获得能量</div>
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
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624479243/coupon_2x_cbdf11bd43.png"
              alt="next planet"
              className="result__next"
            />

            <div className="result__explanation--title">
              {coupon.current > 0 && (
                <p>
                  恭喜您获得OBB代金券 <br /> 请扫码添加OBB客服并截图领取
                  <br /> 剩余代金券：{`${coupon.current}/${coupon.total}`}
                </p>
              )}
              {coupon.current <= 0 && (
                <p>
                  本轮代金券已经发放完啦，下一关还有更多惊喜，记得早点来哦！
                </p>
              )}
            </div>
            <div
              className="result__button--ranking"
              onTouchEnd={() => {
                updateCoupon(currentLevel + 1, {
                  ...coupon,
                  current: coupon.current - 1,
                });
                updateScore();
                setPage("ranking");
              }}
            >
              <ButtonBlue text={"排行榜"} />
            </div>
            <div
              className="result__button--download"
              onTouchEnd={() => {
                updateCoupon(currentLevel + 1, {
                  ...coupon,
                  current: coupon.current - 1,
                });
                updateScore();

                //打开dropbox链接
                if (currentLevel == 0) {
                  console.log("下载素材1");
                  window.open(dbLinks.level1);
                }
                if (currentLevel == 1) {
                  console.log("下载素材2");
                  window.open(dbLinks.level2);
                }
                if (currentLevel == 2) {
                  console.log("下载素材3");
                  window.open(dbLinks.level3);
                }
                if (currentLevel == 3) {
                  console.log("下载素材4");
                  window.open(dbLinks.level4);
                }
              }}
            >
              <ButtonBlue text={"下载素材"} />
            </div>
          </div>
        )}

        {score < 75 && (
          <div>
            <div className="feedback__title feedback__title--negative">
              获得能量
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
              能量不足，启动失败
            </div>
            {player.lifeLeft < 1 && (
              <div className="result__explanation--text">
                关注公众号获得更多机会！
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
                    window.alert("您还没有关注公众号");
                  }
                }
              }}
            >
              <ButtonBlue text={player.lifeLeft >= 1 ? "返回" : "我已关注"} />
            </div>
            <div
              className="result__button--download"
              onTouchEnd={() => {
                if (player.lifeLeft >= 1) {
                  setPlayer({ ...player, lifeLeft: player.lifeLeft - 1 });
                  // setPage(`level${currentLevel + 1}`);

                  restart();
                } else {
                  console.log("关注公众号");
                  window.open(
                    "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MjMyODE1Nw==&scene=124#wechat_redirect"
                  );
                  // wx.updateAppMessageShareData({
                  //   title: "Hi", // 分享标题
                  //   desc: "Hello", // 分享描述
                  //   link: "https://www.aptamil-training-series.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  //   imgUrl:
                  //     "https://res.cloudinary.com/duykdzv1k/image/upload/v1624363519/aptaclub_de_product_stage_2_105110181b.jpg", // 分享图标
                  //   success: function () {
                  //     // 设置成功
                  //     setPlayer({ ...player, lifeLeft: 2 });
                  //   },
                  // });
                }
              }}
            >
              <ButtonBlue
                text={player.lifeLeft >= 1 ? "再玩一次" : "关注公众号"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
