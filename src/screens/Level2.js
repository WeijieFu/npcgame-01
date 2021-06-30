import React, { useState, useEffect, useRef } from "react";
import "../styles/level.css";
import "../styles/level1.css";
import "../styles/level2.css";
import ButtonNumber from "../components/ButtonNumber";
import Question from "../components/Question";
import Feedback from "../components/Feedback";
import Result from "../components/Result";
import Life from "../components/Life";
import Link from "../components/Link";
import GSAP, { Power4 } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { getQuestion } from "../api/question";
GSAP.registerPlugin(ScrollToPlugin);

const Level2 = ({ setPage, player, setPlayer }) => {
  const level = useRef();
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [active, setActive] = useState(false);
  const [feedback, setFeedback] = useState({ isShow: false, isRight: true });
  const [result, setResult] = useState({ isShow: false, isPass: false });
  const [link, setLink] = useState({ isShow: false });
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

    const res = await getQuestion(2);
    setQuestions(res);
  }, []);
  return (
    <div className="level" ref={level}>
      <div className="level__wrapper">
        <Life lifeLeft={player.lifeLeft} />
        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624725579/level_02_3x_4e190829fd.png"
          alt=""
          className="level__background"
        />
        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_milkbottle_3x_231688a131.png"
          alt="next planet"
          className="level__next"
        />

        <img
          className="level__rocket"
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

        <img
          className="level2__cow--1"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624726466/level_02_cow1_3x_ff30ae24ae.png"
        />
        <img
          className="level2__cow--2"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624726466/level_02_cow2_3x_d983e89fdd.png"
        />
        <img
          className="level2__cow--3"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1624726466/level_02_cow3_3x_f1d6179a2f.png"
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
            <Result
              score={score}
              result={result}
              setPage={setPage}
              player={player}
              setPlayer={setPlayer}
              currentLevel={1}
              restart={restart}
              link={link}
              setLink={setLink}
            />
          </div>
        )}
        {link.isShow && (
          <Link
            setLink={setLink}
            link={link}
            codeURL="https://res.cloudinary.com/duykdzv1k/image/upload/v1625061537/qrcode_for_gh_0035047f7065_430_4de6c69275.jpg"
          />
        )}
      </div>
    </div>
  );
};

export default Level2;
