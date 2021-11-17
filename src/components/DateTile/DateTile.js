import styles from './DateTile.module.css';

const DateTile = ({ dateNumber, isToday, isPrevMonth, isNextMonth }) => {
  return (
    <div className={`${styles.DateTile} ${isToday ? styles.today : isPrevMonth ? styles.prevMonthTile : isNextMonth ? styles.nextMonthTile : ''}`}>
      {dateNumber.toString()}
    </div>
  )
}

export default DateTile;