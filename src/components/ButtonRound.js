import React from "react";
import "../styles/button.css";

const ButtonRound = ({ direction }) => {
  /**
   * Animation
   */
  const handleTouchStart = (e) => {
    e.target.style.transform = "translateY(0.4rem)";
  };
  const handleTouchEnd = (e) => {
    e.target.style.transform = "translateY(0rem)";
  };

  return (
    <div
      className="button--round"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="button__main--round">
        {direction === "left" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.183"
            height="25.363"
            viewBox="0 0 14.183 25.363"
          >
            <path
              d="M11942.993,5665.6l-10.561,10.56,10.561,10.561"
              transform="translate(-11930.932 -5663.481)"
              fill="none"
              stroke="#c98c00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
        {direction === "right" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.183"
            height="25.363"
            viewBox="0 0 14.183 25.363"
          >
            <path
              d="M11942.993,5665.6l-10.561,10.56,10.561,10.561"
              transform="translate(11945.114 5688.844) rotate(180)"
              fill="none"
              stroke="#c98c00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
      </div>
      <div className="button__shadow--round"></div>
    </div>
  );
};

export default ButtonRound;
