import styles from './NavigationBar.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight);

function NavigationBar() {
  return (
    <div className={styles.NavigationBar}>
      <button
        className={styles.navButton}
        onClick={/* go to previous month */}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <div className={styles.dateHeading}>
        <h1>{/* Month */`November`}</h1>
        <p>{new Date().toDateString()}</p>
      </div>
      <button
        className={styles.navButton}
        onClick={/* go to next month */}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </button>
    </div>
  );
}

export default NavigationBar;