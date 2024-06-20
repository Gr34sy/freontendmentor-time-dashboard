import React from "react";
import classes from "./timecard.module.css";
import getHeader from "../../helpers/getHeader";

const TimeCard = ({ title, timeframes, headerColor, headerPicture }) => {

  const header = getHeader(title);

  return (
    <div className={classes.timecard}>
      <div className={`${classes.header} ${classes[header.color]}`}>
        <img src={header.icon} alt={`${title} icon`}/>
      </div>

      <div className={classes.container}>
        {title}
      </div>
    </div>
  );
};

export default TimeCard;
