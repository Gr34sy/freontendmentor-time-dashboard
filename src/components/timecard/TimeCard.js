import React from "react";
import classes from "./timecard.module.css";

const TimeCard = ({ title, hours, lastHours, period, headerColor, headerPicture }) => {
  return (
    <div className={classes.timecard}>
      <div className={`${classes.header} ${classes[headerColor]}`}></div>

      <div className={classes.container}>
        asdasd
      </div>
    </div>
  );
};

export default TimeCard;
