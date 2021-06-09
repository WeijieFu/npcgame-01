import * as React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../styles/global.css";
///api
import { playerLogin, playerUpdate } from "../api/player";

///components
import Start from "../screens/Start";

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
      {page == "start" && <Start />}
      {/* { page == 'chooselevel' && <ChooseLevel/>} */}

      {/* <h1>Hello this is NPC Game</h1>
      <p>your nickname is {userInfo.nickname}</p>
      <p>your openid is {userInfo.openid}</p>
      <img src={userInfo.headimgurl} alt=""/> */}

      {/* <button onClick={handlePlayerLogin}>Create</button>
      
      <button onClick={handlePlayerUpdate}>Update</button> */}
    </main>
  );
};

export default IndexPage;
