import React, { useState }  from 'react';
import CalendarBody from './CalendarBody';
import SelectedDay from './SelectedDay';
import style from './style.module.scss'
const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <article className={style.calendarWrapper}> 
        <SelectedDay  currentDay={currentDay}/>
        <CalendarBody currentDay={currentDay} setCurrentDay={setCurrentDay}/>
    </article>
  );
}

export default Calendar;
