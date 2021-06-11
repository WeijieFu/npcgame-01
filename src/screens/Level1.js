import React, { useState, useEffect, useRef } from "react";
import "../styles/level.css";
import "../styles/level1.css";
import ButtonNumber from "../components/ButtonNumber";
import Question from "../components/Question";
import Feedback from "../components/Feedback";

import GSAP, { Power4 } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { getQuestion } from "../api/question";
GSAP.registerPlugin(ScrollToPlugin);

const Level1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [active, setActive] = useState(false);
  const [feedback, setFeedback] = useState({ isShow: false, isRight: true });
  const level = useRef();
  const [questions, setQuestions] = useState({
    level_description: "",
    question: [],
  });
  useEffect(async () => {
    GSAP.to(level.current, {
      duration: 3,
      scrollTo: "#question_1",
      ease: Power4.easeIn,
    });

    const res = await getQuestion(1);
    setQuestions(res);
  }, []);
  return (
    <div className="level" ref={level}>
      <div className="level__wrapper">
        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623335856/level_1_bg_3x_13489d4028.png"
          alt=""
          className="level__background"
        />
        <img
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623330596/planet_cow_3x_5bc9942397.png"
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
          className="level__plant--1"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623337917/level_plant_B_3x_dfd5d55754.png"
        />
        <img
          className="level__plant--2"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623337918/level_plant_A_3x_d002117ba6.png"
        />

        <img
          className="level__plant--3"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623337917/level_plant_B_3x_dfd5d55754.png"
        />

        <span
          className="level1__question--1"
          id="question_1"
          onTouchEnd={() => {
            setCurrentQuestion(0);
            setActive(!active);
          }}
        >
          <ButtonNumber text={"1"} />
        </span>
        <span className="level1__question--2" id="question_2">
          <ButtonNumber text={"2"} />
        </span>
        <span className="level1__question--3" id="question_3">
          <ButtonNumber text={"3"} />
        </span>
        <span className="level1__question--4" id="question_4">
          <ButtonNumber text={"4"} />
        </span>
        <span className="level1__question--5" id="question_5">
          <ButtonNumber text={"5"} />
        </span>
        <span className="level1__question--6" id="question_6">
          <ButtonNumber text={"6"} />
        </span>
        <span className="level1__question--7" id="question_7">
          <ButtonNumber text={"7"} />
        </span>
        <span className="level1__question--8" id="question_8">
          <ButtonNumber text={"8"} />
        </span>
        <span className="level1__question--9" id="question_9">
          <ButtonNumber text={"9"} />
        </span>
        <span className="level1__question--10" id="question_10">
          <ButtonNumber text={"10"} />
        </span>

        {active && (
          <div className="level__question">
            <Question
              currentLevel={1}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              active={active}
              setActive={setActive}
              questions={questions}
              setFeedback={setFeedback}
            />
          </div>
        )}
        {feedback.isShow && (
          <div className="level__feedback">
            <Feedback
              feedback={feedback}
              setCurrentQuestion={setCurrentQuestion}
              currentQuestion={currentQuestion}
              questions={questions}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Level1;
