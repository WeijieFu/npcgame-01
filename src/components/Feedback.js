import React, { useEffect, useRef, useState } from "react";
import "../styles/feedback.css";

import GSAP from "gsap";

import ButtonBlue from "./ButtonBlue";

const Feedback = ({
  feedback,
  setCurrentQuestion,
  questions,
  currentQuestion,
  setFeedback,
  setActive,
  count,
  result,
  setResult,
}) => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (feedback.isShow) {
      GSAP.fromTo(container.current, { scale: 0 }, { scale: 1, duration: 0.3 });
    } else {
      GSAP.fromTo(container.current, { scale: 1 }, { scale: 0, duration: 0.1 });
    }
  }, [feedback.isShow]);
  const container = useRef();
  return (
    <div className="feedback" ref={container}>
      <div className="feedback__wrapper">
        {feedback.isRight && (
          <div>
            <div className="feedback__title">获得能量</div>
            <div className="feedback__score">
              +{6 + Math.floor(count * 0.4)}%
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
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426468/feedback_positive_rocket_3x_bd1f899088.png"
              alt="rocket"
              className="feedback__rocket"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426616/feedback_positive_rocket_fire_3x_1045fa898c.png"
              alt="rocket fire"
              className="feedback__fire"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426616/feedback_positive_rocket_fire_3x_1045fa898c.png"
              alt="rocket fire"
              className="feedback__fire--1"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426616/feedback_positive_rocket_fire_3x_1045fa898c.png"
              alt="rocket fire"
              className="feedback__fire--2"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426616/feedback_positive_rocket_fire_3x_1045fa898c.png"
              alt="rocket fire"
              className="feedback__fire--3"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426616/feedback_positive_rocket_fire_3x_1045fa898c.png"
              alt="rocket fire"
              className="feedback__fire--4"
            />

            <div className="feedback__explanation--title">回答正确</div>
            <div className="feedback__explanation--text">
              {questions.question[currentQuestion].feedback}
            </div>
          </div>
        )}

        {!feedback.isRight && (
          <div>
            <div className="feedback__title feedback__title--negative ">
              获得能量
            </div>
            <div className="feedback__score feedback__score--negative">+0%</div>
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
                    stroke="#FF8B4D"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </div>
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623426468/feedback_positive_rocket_3x_bd1f899088.png"
              alt="rocket"
              className="feedback__rocket"
            />
            <img
              src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623673163/feedback_negative_3x_406585e796.png"
              alt="rocket"
              className="feedback__sign"
            />

            <div className="feedback__explanation--title feedback__explanation--title--negative">
              回答错误
            </div>
            <div className="feedback__explanation--text">
              {questions.question[currentQuestion].feedback}
            </div>
          </div>
        )}

        <div
          className="feedback__button"
          onTouchEnd={() => {
            setCurrentQuestion(currentQuestion + 1);
            setFeedback({ isShow: false });
            setActive(false);
            if (currentQuestion > 8) {
              setResult({ isShow: true });
            }
          }}
        >
          <ButtonBlue text={currentQuestion < 9 ? "下一题" : "完成"} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
