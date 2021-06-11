import React, { useEffect, useRef, useState } from "react";
import "../styles/question.css";

import GSAP from "gsap";

import ButtonBlue from "../components/ButtonBlue";
const Question = ({
  currentLevel,
  currentQuestion,
  setCurrentQuestion,
  active,
  setActive,
  questions,
  setFeedback,
}) => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (active) {
      GSAP.fromTo(container.current, { scale: 0 }, { scale: 1, duration: 0.3 });
    } else {
      GSAP.fromTo(container.current, { scale: 1 }, { scale: 0, duration: 0.1 });
    }

    console.log(questions);
  }, [active]);
  const container = useRef();
  return (
    <div className="question" ref={container}>
      <div className="question__wrapper">
        <div
          className="question__close"
          onTouchEnd={() => {
            setActive(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.857"
            height="26.856"
            viewBox="0 0 26.857 26.856"
          >
            <g transform="translate(2.121 2.121)">
              <path
                d="M13120.6,3427.446l22.613,22.613"
                transform="translate(-13120.604 -3427.446)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <path
                d="M0,0,22.613,22.613"
                transform="translate(22.613 0) rotate(90)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>

        <div className="question__progress">
          <div className="question__progress--background"></div>
          <div className="question__progress--bar"></div>
        </div>

        <div className="question__text">
          {`${currentQuestion + 1}. ` +
            questions.question[currentQuestion].question_text}
        </div>

        <div className="question__options">
          <div
            className={
              selected === "A"
                ? "question__option question__option--active"
                : "question__option"
            }
            onTouchEnd={() => {
              setSelected("A");
            }}
          >
            <span className="question__option--label">A</span>
            <span className="question__option--text">
              {questions.question[currentQuestion].answer_a}
            </span>
          </div>

          <div
            className={
              selected === "B"
                ? "question__option question__option--active"
                : "question__option"
            }
            onTouchEnd={() => {
              setSelected("B");
            }}
          >
            <span className="question__option--label">B</span>
            <span className="question__option--text">
              {questions.question[currentQuestion].answer_b}
            </span>
          </div>

          <div
            className={
              selected === "C"
                ? "question__option question__option--active"
                : "question__option"
            }
            onTouchEnd={() => {
              setSelected("C");
            }}
          >
            <span className="question__option--label">C</span>
            <span className="question__option--text">
              {questions.question[currentQuestion].answer_c}
            </span>
          </div>

          <div
            className={
              selected === "D"
                ? "question__option question__option--active"
                : "question__option"
            }
            onTouchEnd={() => {
              setSelected("D");
            }}
          >
            <span className="question__option--label">D</span>
            <span className="question__option--text">
              {questions.question[currentQuestion].answer_d}
            </span>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623416059/question_bear_3x_d1af56aa13.png"
          alt="bear"
          className="question__bear"
        />

        <div
          className="question__button"
          onTouchEnd={() => {
            if (selected === questions.question[currentQuestion].correct) {
              GSAP.fromTo(
                container.current,
                { scale: 1 },
                {
                  scale: 0,
                  duration: 0.1,
                  onComplete: () => {
                    setActive(false);
                    setFeedback({ isShow: true, isRight: true });
                  },
                }
              );
            } else if (selected === "") {
              return;
            } else {
              console.log("wrong");
            }
          }}
        >
          <ButtonBlue text={"确认"} />
        </div>
      </div>
    </div>
  );
};

export default Question;
