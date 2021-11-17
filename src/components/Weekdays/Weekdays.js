import styles from './Weekdays.module.css';

const Weekdays = () => {
  return (
    <div className={styles.Weekdays}>
      <div className={styles.weekday}>Sun</div>
      <div className={styles.weekday}>Mon</div>
      <div className={styles.weekday}>Tues</div>
      <div className={styles.weekday}>Wed</div>
      <div className={styles.weekday}>Thurs</div>
      <div className={styles.weekday}>Fri</div>
      <div className={styles.weekday}>Sat</div>
    </div>
  )
}

export default Weekdays;