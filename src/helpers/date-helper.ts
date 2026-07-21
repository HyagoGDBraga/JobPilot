import { DateHelper } from "js-date-helpers";

export function getCurrentDate(): string {
  const now = new DateHelper();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = months[now.month() - 1];

  return `${monthName} ${now.date}, ${now.year}\nHour: ${now.hour}`;
}
