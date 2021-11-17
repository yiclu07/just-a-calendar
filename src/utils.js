import { startOfMonth, getDay, getDaysInMonth, lastDayOfMonth } from "date-fns";

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/* 
  getPrevMonthDates(date) takes a Date object as an argument; it returns an array that contains the remaining dates of the previous month that could appear on a calendar page for the month of the Date object

  EXAMPLE:

    const prevMonthDates = getPrevMonthDates(new Date(2021, 0, 1));

    prevMonthDates would equal: [
      27, 28, 29, 30, 31
    ]
    because these dates from December 2020 could appear on a calendar page for January 2021 in the first week

*/
export const getPreviousMonthDates = (date) => {
  const previousMonthDatesArr = [];
  const firstDayOfMonth = getDay(startOfMonth(date));
  const lastDateOfPreviousMonth = getDaysInMonth(new Date(date.getYear(), date.getMonth(), 0));

  for (let i = lastDateOfPreviousMonth; i > lastDateOfPreviousMonth - firstDayOfMonth; i--) {
    previousMonthDatesArr.unshift(i);
  }

  return previousMonthDatesArr;
}

/* 
  getCurrentMonthDates(date) takes a Date object as an argument; it returns an array that contains the dates of the Date object's month

  EXAMPLE:

    const currentMonthDates = getCurrentMonthDates(new Date(2021, 0, 1));

    currentMonthDates would equal: [
      1, 2, 3, ... 29, 30, 31
    ]
*/
export const getCurrentMonthDates = (date) => {
  const currentMonthDatesArr = [];
  const lastDateOfCurrentMonth = getDaysInMonth(date);

  for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
    currentMonthDatesArr.push(i);
  }

  return currentMonthDatesArr;
}

/* 
  getNextMonthDates(date) takes a Date object as an argument; it returns an array that contains the first dates of the following month that could appear on a calendar page for the month of the Date object

  EXAMPLE:
    const nextMonthDates = getNextMonthDates(new Date(2021, 0, 1));

    nextMonthDates would equal: [
      1, 2, 3, 4, 5, 6
    ]
    because these dates from February 2021 could appear on a calendar page for January 2021 in the final week
*/
export const getNextMonthDates = (date) => {
  const nextMonthDatesArr = [];
  const lastDayOfCurrentMonth = getDay(lastDayOfMonth(date));

  for (let i = 1; i <= 6 - lastDayOfCurrentMonth; i++) {
    nextMonthDatesArr.push(i);
  }

  return nextMonthDatesArr;
}
