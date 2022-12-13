// get future date

const getFutureDate = () => new Date(2023, 4, 22, 11, 30, 0);

// set end date

const outputEndDate = () => {
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
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    const endDate = document.querySelector('.end-date');

    const futureDate = getFutureDate();
    const year = futureDate.getFullYear();
    const day = futureDate.getDate();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    const monthIndex = futureDate.getMonth();
    const weekdayIndex = futureDate.getDay();

    endDate.textContent = `Middle Front-end Course ends on ${weekdays[weekdayIndex]}, ${day} ${months[monthIndex]} ${year} ${hours}:${minutes}am`;
};

outputEndDate();

// set countdown

const remainingTime = () => {
    const countdown = document.querySelector('.countdown');
    const items = document.querySelectorAll('.countdown-format h5');

    const futureDate = getFutureDate();
    const futureTime = futureDate.getTime();
    const today = new Date().getTime();
    const timeDiff = futureTime - today;

    // values in ms
    const msDay = 24 * 60 * 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msMinute = 60 * 1000;
    const msSecond = 1000;

    const days = Math.floor(timeDiff / msDay);
    const hours = Math.floor((timeDiff % msDay) / msHour);
    const minutes = Math.floor((timeDiff % msHour) / msMinute);
    const seconds = Math.floor((timeDiff % msMinute) / msSecond);

    const values = [days, hours, minutes, seconds];

    const format = value => {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    };

    items.forEach((item, index) => {
        item.textContent = format(values[index]);
    });
};

remainingTime();
