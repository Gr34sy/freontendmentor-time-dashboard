import React from "react";
import classes from "./timecard.module.css";
import getHeader from "../../helpers/getHeader";
import ellipsis from '../../assets/icon-ellipsis.svg';

const TimeCard = ({ title, time, timeframe}) => {
  function getPeriod(timeframe){
    let period;
    switch(timeframe){
      case 'weekly':
        period = 'week';
      break;

      case'monthly':
        period = 'month';
      break;

      case'daily':
        period = 'day';
      break;

      default:
        period = 'week';
      break;
    }
    return period;
  }

  const period = getPeriod(timeframe);
  const header = getHeader(title);

  return (
    <div className={`${classes.timecard} ${classes[header.color]}`}>
      <div className={classes.header}>
        <img src={header.icon} alt={`${title} icon`}/>
      </div>

      <div className={classes.container}>
        <div className={classes.title}>
          <h2>{title}</h2>
          <img src={ellipsis} alt="ellipssis"/>
        </div>

        <p className={classes.hours}>
          {time[timeframe].current}hrs
        </p>

        <p className={classes['previous-hours']}>
          Last <span>{period}</span> - {time[timeframe].previous}hrs
        </p>
      </div>
    </div>
  );
};

export default TimeCard;
