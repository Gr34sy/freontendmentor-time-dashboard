import React from 'react';
import classes  from './grid.module.css';


const Grid = ({children}) => {
  return (
    <div className={classes.grid}>
      {children}
    </div>
  )
}

export default Grid
