import React, { useRef, useEffect, useState } from "react";
import "../styles/material.css";
import ButtonBlue from "../components/ButtonBlue";
import Link from "../components/Link";
import GSAP from "gsap";
const Material = ({ player, active }) => {
  const [link, setLink] = useState({ isShow: false });
  const dbLinks = {
    level1:
      "https://www.dropbox.com/sh/w2xtxrrld35g797/AACjxXfzVD7NqD78Hu2PPjQya?dl=0 ",
    level2:
      "https://www.dropbox.com/sh/vi1m9ybegxa0zzw/AACrLR_sHGb3y8tjS4dbEocYa?dl=0",
    level3:
      "https://www.dropbox.com/sh/itidgegzih4dpgz/AAC-BUPUoxXvl5yALKylwaBHa?dl=0",
    level4:
      "https://www.dropbox.com/sh/23w09uesn5jvxfg/AAD6KV34HYEnp1RRk1Ee0PdQa?dl=0",
  };
  const container = useRef();

  useEffect(() => {
    if (active) {
      GSAP.fromTo(container.current, { scale: 0 }, { scale: 1, duration: 0.3 });
    } else {
      GSAP.fromTo(container.current, { scale: 1 }, { scale: 0, duration: 0.1 });
    }
  }, [active]);
  return (
    <>
      <div className="material" ref={container}>
        <div className="material__wrapper">
          {player.currentLevel > 0 && (
            <div
              className="material__button"
              onTouchEnd={() => {
                window.open(dbLinks.level1);
              }}
            >
              <ButtonBlue text={"品牌与研究"} />
            </div>
          )}
          {player.currentLevel > 1 && (
            <div
              className="material__button"
              onTouchEnd={() => {
                window.open(dbLinks.level2);
              }}
            >
              <ButtonBlue text={"产品"} />
            </div>
          )}
          {player.currentLevel > 2 && (
            <div
              className="material__button"
              onTouchEnd={() => {
                window.open(dbLinks.level3);
              }}
            >
              <ButtonBlue text={"宝宝成长"} />
            </div>
          )}
          {player.currentLevel > 3 && (
            <div
              className="material__button"
              onTouchEnd={() => {
                window.open(dbLinks.level4);
              }}
            >
              <ButtonBlue text={"质量与安全"} />
            </div>
          )}
          {player.currentLevel > 3 && (
            <div
              className="material__button"
              onTouchEnd={() => {
                setLink({ isShow: !link.isShow });
              }}
            >
              <ButtonBlue text={"live链接"} />
            </div>
          )}
        </div>
      </div>
      {link.isShow && (
        <Link
          setLink={setLink}
          link={link}
          codeURL="https://res.cloudinary.com/duykdzv1k/image/upload/v1625061537/qrcode_for_gh_0035047f7065_430_4de6c69275.jpg"
        />
      )}
    </>
  );
};

export default Material;
