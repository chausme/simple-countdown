// get future date

const getFutureDate = () => new Date(2023, 4, 22, 11, 30, 0);

// get time diff

const getTimeDiff = futureDate => {
    const futureTime = futureDate.getTime();
    const today = new Date().getTime();
    return futureTime - today;
};

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
    const timeDiff = getTimeDiff(futureDate);
    const year = futureDate.getFullYear();
    const day = futureDate.getDate();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    const monthIndex = futureDate.getMonth();
    const weekdayIndex = futureDate.getDay();

    endDate.textContent = `Middle Front-end Course ${timeDiff < 0 ? 'has ended' : 'ends'} on ${
        weekdays[weekdayIndex]
    }, ${day} ${months[monthIndex]} ${year} ${hours}:${minutes}am`;
};

outputEndDate();

// set countdown

const getRemainingTime = () => {
    const items = document.querySelectorAll('.countdown-format h5');

    const futureDate = getFutureDate();
    const timeDiff = getTimeDiff(futureDate);

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

    if (timeDiff < 0) {
        items.forEach((item, index) => {
            const el = item;
            el.textContent = '-';
        });
        clearInterval(countdown);
        return;
    }

    const format = value => {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    };

    items.forEach((item, index) => {
        const el = item;
        el.textContent = format(values[index]);
    });
};

const countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
