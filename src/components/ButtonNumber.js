import React from "react";
import "../styles/button.css";

const ButtonNumber = ({ text, isActive }) => {
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
      className="button--number"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={
          isActive
            ? "button__main--number button__main--number--active"
            : "button__main--number "
        }
      >
        {text}
      </div>
      {!isActive && <div className="button__shadow--number "></div>}
    </div>
  );
};

export default ButtonNumber;
