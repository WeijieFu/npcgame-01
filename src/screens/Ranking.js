import React, { useEffect, useState } from "react";
import "../styles/ranking.css";
import Button from "../components/Button";
import { playerRanking } from "../api/player";
import ButtonNumber from "../components/ButtonNumber";
const Ranking = ({ setPage }) => {
  const [list, setList] = useState([]);
  const [level, setLevel] = useState(1);
  useEffect(async () => {
    const res = await playerRanking();
    if (level < 5) {
      res.sort((a, b) => {
        return b[`scoreLevel${level}`] - a[`scoreLevel${level}`];
      });
    } else {
      res.sort((a, b) => {
        return b.score - a.score;
      });
    }

    setList(res);
  }, [level]);

  return (
    <div className="ranking">
      <div className="ranking__wrapper">
        <img
          className="ranking__background"
          src="https://res.cloudinary.com/duykdzv1k/image/upload/v1623329064/levels_background_3x_13dcb55c89.png"
          alt="background"
        />

        <div className="ranking__title">排行榜</div>
        <div className="ranking__tabs">
          <span
            className="ranking__tab"
            onTouchEnd={() => {
              setLevel(1);
            }}
          >
            <ButtonNumber text={1} />
          </span>
          <span
            className="ranking__tab"
            onTouchEnd={() => {
              setLevel(2);
            }}
          >
            <ButtonNumber text={2} />
          </span>
          <span
            className="ranking__tab"
            onTouchEnd={() => {
              setLevel(3);
            }}
          >
            <ButtonNumber text={3} />
          </span>
          <span
            className="ranking__tab"
            onTouchEnd={() => {
              setLevel(4);
            }}
          >
            <ButtonNumber text={4} />
          </span>
          <span
            className="ranking__tab"
            onTouchEnd={() => {
              setLevel(5);
              console.log(list);
            }}
          >
            <ButtonNumber text={"all"} />
          </span>
        </div>
        <div className="ranking__container">
          <div className="ranking__row">
            <span className="ranking__row--head">头像</span>
            <span className="ranking__row--nickname">昵称</span>
            <span className="ranking__row--energy">能量值</span>
          </div>
          <div className="ranking__list">
            {list.map((item, index) => {
              if (item[`scoreLevel${level}`] != 0) {
                return (
                  <div className="ranking__item" key={item.id}>
                    <span className="ranking__item--head">
                      <img src={item.headimgurl} alt="head" />
                    </span>
                    <span className="ranking__item--nickname">
                      {item.nickname}
                    </span>
                    {level < 5 && (
                      <span className="ranking__item--energy">
                        {item[`scoreLevel${level}`]}
                      </span>
                    )}
                    {level > 4 && (
                      <span className="ranking__item--energy">
                        {item.score}
                      </span>
                    )}
                  </div>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
        <div className="ranking__buttonContainer">
          <span
            onTouchEnd={() => {
              setPage("start");
            }}
          >
            <Button text={"返回"} />
          </span>
          <span
            onTouchEnd={() => {
              setPage("profile");
            }}
          >
            <Button text={"我的"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
