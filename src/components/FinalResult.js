import React, { useEffect, useRef, useState } from "react";
import "../styles/feedback.css";
import "../styles/result.css";
import "../styles/final.css";
// var wx;
// if (typeof window !== `undefined`) {
//   wx = require("weixin-js-sdk");
// }

import GSAP from "gsap";
import ButtonBlue from "./ButtonBlue";

const FinalResult = ({
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
  const updateScore = () => {
    if (currentLevel == 4) {
      const certificationDate = new Date();

      const newCertificationDate = [
        ...player.certificationDate,
        { date: certificationDate.toDateString() },
      ];

      setPlayer({
        ...player,
        scoreLevel5: score,
        score: parseInt(player.score) + parseInt(score),
        currentLevel: currentLevel + 1,
        isCertified: true,
        certificationDate: newCertificationDate,
      });
    }
  };

  useEffect(() => {
    if (result.isShow) {
      GSAP.fromTo(container.current, { scale: 0 }, { scale: 1, duration: 0.3 });
    } else {
      GSAP.fromTo(container.current, { scale: 1 }, { scale: 0, duration: 0.1 });
    }
  }, [result.isShow]);

  useEffect(() => {
    updateScore();
  }, []);

  const container = useRef();

  return (
    <div className="feedback" ref={container}>
      <div className="feedback__wrapper">
        {score > 75 && (
          <div>
            <div className="final__title">恭喜您成功通过</div>
            <div className="final__score">爱他美代购培训项目</div>
            <div className="final__head">
              <img
                src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623331860/planet_bear_3_3x_592072882c.png"
                alt="bear"
                className="final__head--bear"
              />
              <img
                src={player.headimgurl}
                alt="head image"
                className="final__head--player"
              />
              <div className="final__head--name">{player.nickname}</div>
            </div>
            <div className="final__explanation">
              <p className="final__explanation--main">
                感谢您参与我们德国爱他美的代购培训。您成功完成了整个培训项目，这意味着您已拥有丰富的爱他美知识储备，是我们爱他美代购社群重要的一员。您可以作为我们的品牌大使，向您的客户宣传爱他美品牌。
              </p>

              <p className="final__explanation--small">
                点击以下按钮，即可查询并分享您的成就证书。
                <br />
                <br />
                此证书的有效期为一年，一年后您需要参与新的德国爱他美代购培训课程来更新证书。
              </p>
            </div>
            <div
              className="result__button--ranking"
              onTouchEnd={() => {
                // updateScore();
                //打开证书链接
                window.location.replace(
                  "https://www.aptamil-training-certificate.com"
                );
                // setPage("ranking");
              }}
            >
              <ButtonBlue text={"查看证书"} />
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

export default FinalResult;
