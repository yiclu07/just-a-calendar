import { getDay, getDaysInMonth } from "date-fns";

/* 
  getPrevMonthDates(date) takes a Date object as an argument; it returns an array that contains the remaining dates of the previous month that could appear on a calendar page for the month of the Date object

  EXAMPLE:

    const prevMonthDates = getPrevMonthDates(new Date(2021, 0, 1));

    prevMonthDates would equal: [
      27, 28, 29, 30, 31
    ]
    because these dates from December 2020 could appear on a calendar page for January 2021

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