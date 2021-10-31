import {addDays, startOfWeek} from 'date-fns';
import Day from './Day'
import style from './style.module.scss'

function Week ({startingDay,setCurrentDay,currentDay}) {

  const startingDate = startOfWeek(startingDay);
 
  return (
    <div className={style.week}>
      {new Array(7).fill(null).map((_, index) => {
        return <Day  currentDay={currentDay} day={addDays(startingDate, index)} setCurrentDay={setCurrentDay} />
      })}
    </div>
  );
}

export default Week;
