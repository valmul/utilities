/* eslint linebreak-style: ["error", "windows"] */

function getWeek(timestamp) {
  if (typeof timestamp !== 'number' && !isNaN(timestamp)) {
    throw new Error('fnct relativeWeek called with invalid parameter');
  }
  const inputDate = new Date(timestamp);
  const target = new Date(timestamp);
  const dayNumber = (inputDate.getDay() + 6) % 7;

  target.setDate(target.getDate() - dayNumber + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);

  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + (((4 - target.getDay()) + 7) % 7));
  }

  return Math.ceil((firstThursday - target) / (7 * 24 * 3600 * 1000)) + 1;
}

//  return 1 for current week 0 for previous week and else -1
function relativeWeek(timestamp, currentTime = Date.now()) {
  // eslint-disable-next-line no-restricted-globals
  if (typeof timestamp !== 'number' && !isNaN(timestamp)) {
    throw new Error('fnct relativeWeek called with invalid parameter');
  }
  // eslint-disable-next-line no-restricted-globals
  if (typeof currentTime !== 'number' && !isNaN(currentTime)) {
    throw new Error('fnct relativeWeek called with invalid parameter');
  }
  const currentDate = new Date(timestamp);
  const currentWeek = new Date(currentTime);
  if (currentDate.getFullYear() !== currentWeek.getFullYear()) {
    return -1;
  }
  if (getWeek(timestamp) === getWeek(currentTime)) {
    return 1;
  }
  if (getWeek(timestamp) === getWeek(currentTime) - 1) {
    return 0;
  }
  return -1;
}

// return day index in an array [0..13] respresenting previous and current week days
// return -1 if timestamp is not in the two weeks
function dayIn14Days(timestamp, currentDate = Date.now()) {
  const inputDate = new Date(timestamp);
  const dayNumber = (inputDate.getDay() + 6) % 7;
  if (relativeWeek(timestamp, currentDate) === -1) {
    return -1;
  }
  const result = relativeWeek(timestamp, currentDate) * 7 + dayNumber;
  return result;
}

exports.relativeWeek = relativeWeek;
exports.getWeek = getWeek;
exports.dayIn14Days = dayIn14Days;
