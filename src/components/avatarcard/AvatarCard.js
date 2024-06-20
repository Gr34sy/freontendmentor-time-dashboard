import React from "react";
import classes from "./avatarcard.module.css";
import avatar from "../../assets/image-jeremy.png";

const AvatarCard = ({ currentTimeframe, changeTimeframe }) => {
  const timeframes = ["daily", "weekly", "monthly"];

  function handleClick(timeframe) {
    if (typeof changeTimeframe === "function") {
      changeTimeframe(timeframe);
    }
  }

  return (
    <div className={classes.avatarcard}>
      <div className={classes.header}>
        <div className={classes.avatar}>
          <img src={avatar} alt="Jeremy Robson" />
        </div>

        <div className={classes.name}>
          <h2>Report for</h2>
          <p>
            Jeremy <br />
            Robson
          </p>
        </div>
      </div>

      <div className={classes.container}>
        {timeframes.map((timeframe) => {
          return (
            <button
              key={timeframe}
              className={
                currentTimeframe === timeframe
                  ? `${classes["timeframe-btn"]} ${classes["timeframe-btn--active"]}`
                  : classes["timeframe-btn"]
              }
              onClick={() => handleClick(timeframe)}
            >
              {timeframe}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AvatarCard;
