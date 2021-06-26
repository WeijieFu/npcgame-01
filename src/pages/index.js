import * as React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../styles/global.css";
//wx-js-sdk
var wx;
if (typeof window !== `undefined`) {
  wx = require("weixin-js-sdk");
}
///api
import { playerLogin, playerUpdate } from "../api/player";
import { getSignature } from "../api/wxsdk";

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
  });
  const [page, setPage] = useState("level5");

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
              });
              setPage("start");
            });
          });
      });
    // axios
    //   .post(
    //     "/.netlify/functions/getticket",
    //     {},
    //     { headers: { "Content-Type": "application/json" } }
    //   )
    //   .then((jsapiRes) => {
    //     const signature = getSignature(
    //       jsapiRes.data.ticket,
    //       window.location.href
    //     );

    //     wx.config({
    //       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //       appId: "wxd7c3f7f00e3c036b", // 必填，公众号的唯一标识
    //       timestamp: signature.timeStamp, // 必填，生成签名的时间戳
    //       nonceStr: signature.nonceStr, // 必填，生成签名的随机串
    //       signature: signature.signature, // 必填，签名
    //       jsApiList: ["updateAppMessageShareData"], // 必填，需要使用的JS接口列表
    //     });
    //   });
  }, []);

  useEffect(() => {
    if (player.openid) {
      console.log(player);
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
