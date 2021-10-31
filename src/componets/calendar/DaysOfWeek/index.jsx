import { addDays, startOfWeek,format } from "date-fns";
import style from "./style.module.scss";

function DaysOfWeek({currentDay}){
 
  const dausArr = new Array(7).fill(null).map((_,index)=>
  addDays(startOfWeek(currentDay), index)).map((day) => { return <div className ={style.weekNames}>{format(day, 'EEEEE')}</div> })
  
 /*  {
    return <div >{format(addDays(startinfDate,index),'EEEEE')}</div>
  }) */
  
  return(
  /*   className={style.days} */
    <div className ={style.weekNamesContainer }>
      {dausArr}
    </div>
  );
}
export default DaysOfWeek;