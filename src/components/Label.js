import React from "react";
import "../styles/label.css";
const Label = ({ text, active, date }) => {
  return (
    <div className="label">
      <div
        className={active ? "label__main label__main--active " : "label__main"}
      >
        {!active && (
          <span className="label__main__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.41"
              height="12.351"
              viewBox="0 0 9.41 12.351"
            >
              <path
                d="M12.234,5.117h-.588V3.941a2.941,2.941,0,0,0-5.881,0V5.117H5.176A1.18,1.18,0,0,0,4,6.293v5.881a1.18,1.18,0,0,0,1.176,1.176h7.058a1.18,1.18,0,0,0,1.176-1.176V6.293A1.18,1.18,0,0,0,12.234,5.117ZM8.705,10.41A1.176,1.176,0,1,1,9.881,9.234,1.18,1.18,0,0,1,8.705,10.41Zm1.823-5.293H6.882V3.941a1.823,1.823,0,0,1,3.646,0Z"
                transform="translate(-4 -1)"
                fill="#fff"
              />
            </svg>
          </span>
        )}
        <span className="label__main__text">{text}</span>
      </div>
      {!active && <div className="label__date">{date}开放</div>}
    </div>
  );
};

export default Label;
