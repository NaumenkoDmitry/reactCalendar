import { format,isSameDay,isSameMonth } from "date-fns"
import cx from 'classnames';
import styles from './day.module.scss';


const Day = ({ day, setCurrentDay, currentDay }) => {

  const selectDayhandler = () => {
    setCurrentDay(day)

  }

  const selectedDay = {
    [styles.selectedDay] : isSameDay(day,currentDay)
  }
  const hideDays = {
    [styles.hideDays]: !isSameMonth(day, new Date())
  }

  return (
  
      <div onClick={selectDayhandler} className={cx(styles.day, hideDays,selectedDay)}>{format(day, 'd')}</div>
  
  );
}

export default Day;