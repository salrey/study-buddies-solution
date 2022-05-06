// start time from event with id of 2
const date1 = new Date("2022-06-26T03:11:00.000Z");
const date2 = new Date("2022-06-26T03:55:00.000Z");
const date3 = new Date("2021-06-26T03:55:00.000Z");

const humanReadableDateTime = (date) => {
  new Date(date);
  const [month, day, year, hour, minutes, seconds] = [
    date1.getMonth(),
    date1.getDate(),
    date1.getFullYear(),
    date1.getHours(),
    date1.getMinutes(),
    date1.getSeconds(),
  ];
  return `${month}/${day}/${year} and the time is ${hour}: ${minutes}:${seconds}`;
};

// Elapsed time
const elapsedTime = (startTime, endTime) => {
  return Math.floor((endTime.getTime() - startTime.getTime()) / 60000);
};

// return true or false
const isPast = (startTime) => {
  startTime = new Date(startTime);
  let now = new Date();
  return now.getTime() - startTime.getTime() > 0 ? true : false;
};

module.exports = {
  humanReadableDateTime,
  isPast
};
