import React from 'react';
import { format } from 'date-fns';
import selectday from './selectday.module.scss'

const SelectedDay = ({currentDay}) => {
  return (
    <div className={selectday.selectedDateWrapper}>
      <p className={selectday.selectedWeekName}>{format(currentDay, 'eeee')}</p>
      <h2 className={selectday.selectedDate}>{format(currentDay, 'd')}</h2>
    </div>
  );
}

export default SelectedDay;
