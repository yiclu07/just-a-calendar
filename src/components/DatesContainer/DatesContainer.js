import styles from './DatesContainer.module.css';
import DateTile from '../DateTile/DateTile.js';
import { getCurrentMonthDates, getNextMonthDates, getPreviousMonthDates } from '../../utils';
import { getMonth, getYear, isToday } from 'date-fns';

const DatesContainer = ({ date }) => {
  const prevMonthDates = getPreviousMonthDates(date);
  const currentMonthDates = getCurrentMonthDates(date);
  const nextMonthDates = getNextMonthDates(date);

  return (
    <div className={styles.DatesContainer}>
      {prevMonthDates.map((calendarDate, index) => {
        return (
          <DateTile
            key={index}
            dateNumber={calendarDate}
            isToday={isToday(new Date(getYear(date), getMonth(date), calendarDate))}
            isPrevMonth={true}
            isNextMonth={false}
          />
        )
      })}

      {currentMonthDates.map((calendarDate, index) => {
        return (
          <DateTile
            key={index}
            dateNumber={calendarDate}
            isToday={isToday(new Date(getYear(date), getMonth(date), calendarDate))}
            isPrevMonth={false}
            isNextMonth={false}
          />
        )
      })}

      {nextMonthDates.map((calendarDate, index) => {
        return (
          <DateTile
            key={index}
            dateNumber={calendarDate}
            isToday={isToday(new Date(getYear(date), getMonth(date), calendarDate))}
            isPrevMonth={false}
            isNextMonth={true}
          />
        )
      })}
    </div>
  );
}

export default DatesContainer;
