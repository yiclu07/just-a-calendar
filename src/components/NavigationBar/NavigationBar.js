import styles from './NavigationBar.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getMonth, getYear, setMonth } from 'date-fns';
import { months } from '../../utils.js';

library.add(faChevronLeft, faChevronRight);

function NavigationBar({ date, onDateChange }) {
  return (
    <div className={styles.NavigationBar}>
      <button
        className={styles.navButton}
        onClick={() => {onDateChange(setMonth(date, getMonth(date) - 1))}}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <div className={styles.dateHeading}>
        <h1>{`${months[getMonth(date)]} ${getYear(date)}`}</h1>
        <p>{new Date().toDateString()}</p>
      </div>
      <button
        className={styles.navButton}
        onClick={() => {onDateChange(setMonth(date, getMonth(date) + 1))}}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </button>
    </div>
  );
}

export default NavigationBar;
