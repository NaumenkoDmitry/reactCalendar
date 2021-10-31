import { format} from 'date-fns';
import React from 'react';
import DaysOfWeek from '../DaysOfWeek';
import Month from '../Month';
import style from './style.module.scss';

const CalendarBody = ({currentDay, setCurrentDay}) => {
  return (
    <div className={style.calendarBodyWrapper}>
      <h2 className={style.calendarBodyHeading }>{format(currentDay, 'LLLL yyyy')}</h2>
      <DaysOfWeek currentDay={currentDay}/>
      <Month currentDay={currentDay} setCurrentDay={setCurrentDay}/>
    </div>
  );
}



export default CalendarBody;
