/* eslint linebreak-style: ["error", "windows"] */

function getWeek(timestamp) {
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
  if (getWeek(timestamp) === getWeek(currentTime)) {
    return 1;
  }
  if (getWeek(timestamp) === getWeek(currentTime) - 1) {
    return 0;
  }
  return -1;
}

exports.relativeWeek = relativeWeek;
exports.getWeek = getWeek;
