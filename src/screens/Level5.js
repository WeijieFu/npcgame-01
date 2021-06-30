import React, { useState, useEffect, useRef } from "react";
import "../styles/level.css";
import "../styles/level1.css";
import "../styles/level5.css";
import ButtonNumber from "../components/ButtonNumber";
import Question from "../components/Question";
import Feedback from "../components/Feedback";
import FinalResult from "../components/FinalResult";
import Life from "../components/Life";

import GSAP, { Power4 } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { getQuestion } from "../api/question";
GSAP.registerPlugin(ScrollToPlugin);

const Level5 = ({ setPage, player, setPlayer }) => {
  const level = useRef();
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [active, setActive] = useState(false);
  const [feedback, setFeedback] = useState({ isShow: false, isRight: true });
  const [result, setResult] = useState({ isShow: false, isPass: false });

  const [questions, setQuestions] = useState({
    level_description: "",
    question: [],
  });

  const restart = () => {
    setResult({ ...result, isShow: false });
    setCurrentQuestion(0);
    setScore(0);
    GSAP.to(level.current, {
      duration: 3,
      scrollTo: "#question_1",
      ease: Power4.easeIn,
    });
  };
  useEffect(async () => {
    restart();

    const res = await getQuestion(5);
    setQuestions(res);
  }, []);
  return (
    <div className="level" ref={level}>
      <div className="level__wrapper">
        <Life lifeLeft={player.lifeLeft} />
        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624725579/level_05_3x_b70cee7a55.png"
          alt=""
          className="level__background"
        />
        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624731750/badge_3x_2c1074f131.png"
          alt=""
          className="level5__badge"
        />

        <span
          className="level1__question--1"
          id="question_1"
          onTouchEnd={() => {
            if (currentQuestion == 0) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"1"} />
        </span>
        <span
          className="level1__question--2"
          id="question_2"
          onTouchEnd={() => {
            if (currentQuestion === 1) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"2"} />
        </span>
        <span
          className="level1__question--3"
          id="question_3"
          onTouchEnd={() => {
            if (currentQuestion === 2) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"3"} />
        </span>
        <span
          className="level1__question--4"
          id="question_4"
          onTouchEnd={() => {
            if (currentQuestion === 3) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"4"} />
        </span>
        <span
          className="level1__question--5"
          id="question_5"
          onTouchEnd={() => {
            if (currentQuestion === 4) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"5"} />
        </span>
        <span
          className="level1__question--6"
          id="question_6"
          onTouchEnd={() => {
            if (currentQuestion === 5) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"6"} />
        </span>
        <span
          className="level1__question--7"
          id="question_7"
          onTouchEnd={() => {
            if (currentQuestion === 6) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"7"} />
        </span>
        <span
          className="level1__question--8"
          id="question_8"
          onTouchEnd={() => {
            if (currentQuestion === 7) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"8"} />
        </span>
        <span
          className="level1__question--9"
          id="question_9"
          onTouchEnd={() => {
            if (currentQuestion === 8) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"9"} />
        </span>
        <span
          className="level1__question--10"
          id="question_10"
          onTouchEnd={() => {
            if (currentQuestion === 9) {
              setActive(!active);
            }
          }}
        >
          <ButtonNumber text={"10"} />
        </span>

        {active && (
          <div className="level__question">
            <Question
              currentQuestion={currentQuestion}
              active={active}
              setActive={setActive}
              questions={questions}
              setFeedback={setFeedback}
              score={score}
              setScore={setScore}
              count={count}
              setCount={setCount}
            />
          </div>
        )}
        {feedback.isShow && (
          <div className="level__feedback">
            <Feedback
              feedback={feedback}
              setFeedback={setFeedback}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              count={count}
              setResult={setResult}
              setActive={setActive}
            />
          </div>
        )}

        {result.isShow && (
          <div className="level__result">
            <FinalResult
              score={score}
              result={result}
              setPage={setPage}
              player={player}
              setPlayer={setPlayer}
              currentLevel={4}
              restart={restart}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Level5;
