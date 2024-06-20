import React from "react";
import classes from "./timecard.module.css";
import getHeader from "../../helpers/getHeader";
import ellipsis from '../../assets/icon-ellipsis.svg';

const TimeCard = ({ title, time, period}) => {

  const header = getHeader(title);

  return (
    <div className={classes.timecard}>
      <div className={`${classes.header} ${classes[header.color]}`}>
        <div>
          <img src={header.icon} alt={`${title} icon`}/>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.title}>
          <h2>{title}</h2>
          <img src={ellipsis} alt="ellipssis"/>
        </div>

        <p className={classes.hours}>
          {time.current}hrs
        </p>

        <p className={classes['previous-hours']}>
          Last <span>{period}</span> - {time.previous}hrs
        </p>
      </div>
    </div>
  );
};

export default TimeCard;
