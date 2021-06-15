import * as React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../styles/global.css";
///api
import { playerLogin, playerUpdate } from "../api/player";

///components
import Start from "../screens/Start";
import ChooseCharacter from "../screens/ChooseCharacter";
import ChooseLevel from "../screens/ChooseLevel";
import Level1 from "../screens/Level1";
import Level2 from "../screens/Level2";
import Level3 from "../screens/Level3";
import Level4 from "../screens/Level4";
import Level5 from "../screens/Level5";
import Ranking from "../screens/Ranking";

// markup
const IndexPage = (props) => {
  const [userInfo, setUserInfo] = useState({ headimgurl: "", openid: "" });
  const [player, setPlayer] = useState({
    openid: "",
    wechatID: "",
    character: "",
    currentLevel: "",
    isCertified: false,
  });
  const [page, setPage] = useState("start");

  const openid = useRef();
  const content = useRef();

  useEffect(() => {
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
      .then((userInfoRes) =>
        setUserInfo({
          headimgurl: userInfoRes.data.headimgurl,
          openid: userInfoRes.data.openid,
        })
      );
  }, []);

  useEffect(() => {
    handlePlayerLogin();
  }, []);

  const handlePlayerLogin = async () => {
    const playerInfo = await playerLogin(userInfo.openid);
    console.log(playerInfo);
  };

  const handlePlayerUpdate = async () => {
    const playerInfo = await playerUpdate(userInfo.openid, {
      wechatID: "alsdjflasjdf",
      character: "1",
      currentLevel: "2",
      isCertified: true,
    });
    console.log(playerInfo);
  };

  return (
    <main>
      <title>寻找Aptamil有机星球</title>
      {page == "start" && <Start setPage={setPage} player={player} />}
      {page == "choosecharacter" && <ChooseCharacter setPage={setPage} />}
      {page == "chooselevel" && <ChooseLevel setPage={setPage} />}
      {page == "level1" && <Level1 setPage={setPage} />}
      {page == "level2" && <Level2 setPage={setPage} />}
      {page == "level3" && <Level3 setPage={setPage} />}
      {page == "level4" && <Level4 setPage={setPage} />}
      {page == "level5" && <Level5 setPage={setPage} />}
      {page == "ranking" && <Ranking setPage={setPage} />}
    </main>
  );
};

export default IndexPage;
