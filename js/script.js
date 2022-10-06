const dateDay = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const digitalClock = document.querySelector(".digital-clock");
const arrowHours = document.querySelector(".clock-hours__arrow");
const arrowMinutes = document.querySelector(".clock-minutes__arrow");
const arrowSeconds = document.querySelector(".clock-seconds__arrow");

const namesOfDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const namesOfMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  const currentDate = new Date();
  const getDay = currentDate.getDay();
  const getMonth = currentDate.getMonth();

  dateDay.textContent = namesOfDay[getDay];
  date.textContent = currentDate.getDate();
  month.textContent = namesOfMonth[getMonth];
  year.textContent = currentDate.getFullYear();

  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  digitalClock.textContent = `Local time: ${hours} : ${minutes} : ${seconds} `;

  // 360 / 12 = 30 години
  // 360 / 60 = 6  хвилин
  // 360 / 60 = 6  секунд

  // 30/60=0.5

  // 12 / 60
  const forHours =
    currentDate.getHours() * 30 + currentDate.getMinutes() * (30 / 60);
  const forMinutes = currentDate.getMinutes() * 6;
  const forSeconds = currentDate.getSeconds() * 6;

  arrowHours.style.transform = `rotate(${forHours}deg)`;
  arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
  arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
}, 1000);
