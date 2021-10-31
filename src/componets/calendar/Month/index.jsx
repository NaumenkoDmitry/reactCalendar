import { addDays, startOfMonth} from 'date-fns';
import React from 'react';
import Week from './Week';
const Month = ({ currentDay, setCurrentDay }) => {


  const startMonth = startOfMonth(currentDay);
  return (
    <div>
       {new Array(6).fill(null).map((_, i) => {
        return <Week currentDay={currentDay} setCurrentDay={setCurrentDay} startingDay={addDays(startMonth, 7 * i)} />
      })}
    </div>
  );
}

export default Month;
