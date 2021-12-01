import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/global.css";

///api
import { playerLogin, playerUpdate } from "../api/player";

///components

import Start from "../screens/Start";
import Loading from "../screens/Loading";
import ChooseCharacter from "../screens/ChooseCharacter";
import ChooseLevel from "../screens/ChooseLevel";
import Level1 from "../screens/Level1";
import Level2 from "../screens/Level2";
import Level3 from "../screens/Level3";
import Level4 from "../screens/Level4";
import Level5 from "../screens/Level5";
import Ranking from "../screens/Ranking";
import Profile from "../screens/Profile";

// markup
const IndexPage = (props) => {
  const [player, setPlayer] = useState({
    openid: "",
    wechatID: "",
    headimgurl: "",
    character: "",
    currentLevel: 0,
    isCertified: false,
    nickname: "",
    score: 0,
    scoreLevel1: 0,
    scoreLevel2: 0,
    scoreLevel3: 0,
    scoreLevel4: 0,
    scoreLevel5: 0,
    lifeLeft: 2,
    hasSubscribed: false,
    hasDoneLiveSession: false,
    certificationDate: [],
  });
  const [page, setPage] = useState("loading"); //loading or start

  useEffect(async () => {
    const query = props.location.search;
    const start = query.search("=");
    const end = query.search("&");
    const code = props.location.search.slice(start + 1, end);

    axios
      .post(
        "/.netlify/functions/getusers",
        { code: code },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((userInfoRes) => {
        console.log(userInfoRes.data);
        axios
          .post(
            "/.netlify/functions/getsubscribe",
            { openid: userInfoRes.data.openid },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((subscribeInfoRes) => {
            console.log(subscribeInfoRes);

            playerLogin(userInfoRes.data.openid).then((res) => {
              res.score =
                parseInt(res.scoreLevel1) +
                parseInt(res.scoreLevel2) +
                parseInt(res.scoreLevel3) +
                parseInt(res.scoreLevel4) +
                parseInt(res.scoreLevel5);

              setPlayer({
                openid: res.openid,
                headimgurl: userInfoRes.data.headimgurl,
                nickname: userInfoRes.data.nickname,
                wechatID: res.wechatID,
                character: res.character,
                currentLevel: res.currentLevel,
                isCertified: false,
                score: res.score,
                scoreLevel1: res.scoreLevel1,
                scoreLevel2: res.scoreLevel2,
                scoreLevel3: res.scoreLevel3,
                scoreLevel4: res.scoreLevel4,
                scoreLevel5: res.scoreLevel5,
                lifeLeft: res.lifeLeft,
                hasSubscribed: subscribeInfoRes.data.subscribe === 1,
                hasDoneLiveSession: res.hasDoneLiveSession,
                certificationDate: res.certificationDate,
              });
              setPage("start");
            });
          });
      });
  }, []);

  useEffect(() => {
    if (player.openid) {
      console.log(player);
      player.score =
        parseInt(player.scoreLevel1) +
        parseInt(player.scoreLevel2) +
        parseInt(player.scoreLevel3) +
        parseInt(player.scoreLevel4) +
        parseInt(player.scoreLevel5);
      playerUpdate(player.openid, player);
    }
  }, [player]);

  return (
    <main>
      <title>寻找Aptamil爱他美星球</title>

      {page == "loading" && <Loading />}
      {page == "start" && <Start setPage={setPage} player={player} />}
      {page == "choosecharacter" && (
        <ChooseCharacter
          setPage={setPage}
          player={player}
          setPlayer={setPlayer}
        />
      )}
      {page == "chooselevel" && (
        <ChooseLevel setPage={setPage} player={player} setPlayer={setPlayer} />
      )}
      {page == "level1" && (
        <Level1 setPage={setPage} player={player} setPlayer={setPlayer} />
      )}
      {page == "level2" && (
        <Level2 setPage={setPage} player={player} setPlayer={setPlayer} />
      )}
      {page == "level3" && (
        <Level3 setPage={setPage} player={player} setPlayer={setPlayer} />
      )}
      {page == "level4" && (
        <Level4 setPage={setPage} player={player} setPlayer={setPlayer} />
      )}
      {page == "level5" && (
        <Level5 setPage={setPage} player={player} setPlayer={setPlayer} />
      )}
      {page == "ranking" && <Ranking setPage={setPage} />}
      {page == "profile" && <Profile setPage={setPage} player={player} />}
    </main>
  );
};

export default IndexPage;
