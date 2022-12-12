const months = [
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
    'December',
];

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Sunday',
];

const endDate = document.querySelector('.end-date');
const countdown = document.querySelector('.countdown');
const items = document.querySelectorAll('.countdown-format h4');

let futureDate = new Date(2022, 4, 22, 11, 30, 0);

const year = futureDate.getFullYear();
const day = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const monthIndex = futureDate.getMonth();
const weekdayIndex = futureDate.getDay();

endDate.textContent = `Middle Front-end Course ends on ${weekdays[weekdayIndex]}, ${day} ${months[monthIndex]} ${year} ${hours}:${minutes}am`;
