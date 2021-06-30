import React, { useEffect, useRef } from "react";
import GSAP from "gsap";
import "../styles/link.css";
const Link = ({ link, setLink }) => {
  const container = useRef();
  useEffect(() => {
    if (link.isShow) {
      GSAP.fromTo(container.current, { scale: 0 }, { scale: 1, duration: 0.3 });
    } else {
      GSAP.fromTo(container.current, { scale: 1 }, { scale: 0, duration: 0.1 });
    }
  }, [link]);
  return (
    <div className="link" ref={container}>
      <div className="link__wrapper">
        <a>二维码</a>
      </div>
    </div>
  );
};

export default Link;
