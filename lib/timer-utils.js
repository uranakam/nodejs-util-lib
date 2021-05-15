'use strict';

// dependencies.
const StringUtils = require('./string-utils');

/**
 * Used to nicely print the time difference between 2 times(milliseconds).
 * @param start - Start time in milliseconds.
 * @param end - End time in milliseconds. Defaulted to Date.now() if not set.
 * @return {string} - Returns the formatted time string.
 */
exports.getTimeDifferenceString = (start, end) => {
  // make sure start is set.
  if (StringUtils.isEmpty(start)) {
    return '';
  }

  // set the end time to now if its not already set.
  if (StringUtils.isEmpty(end)) {
    end = Date.now();
  }

  // get the time difference.
  let difference = end - start;

  // return the formatted time.
  return exports.formatTime(difference);
};

/**
 * Converts a time in milliseconds to a nice formatted string.
 * @param time - time in milliseconds.
 * @return {string} - Returns the formatted time string.
 */
exports.formatTime = (time) => {
  // make sure start is set.
  if (StringUtils.isEmpty(time)) {
    return '';
  }

  // get the times.
  let milliseconds = Math.floor((time % 1000));
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  // stores the strings of times to concatenate.
  const results = [];

  // check what is the highest measure of time that is greater than 0.
  if (hours > 0) {
    results.push(`${hours} Hour(s)`);
    results.push(`${minutes} Minute(s)`);
    results.push(`${seconds} Second(s)`);
  }
  else if (minutes > 0) {
    results.push(`${minutes} Minute(s)`);
    results.push(`${seconds} Second(s)`);
  }
  else if (seconds > 0) {
    results.push(`${seconds} Second(s)`);
  }
  else {
    results.push(`${milliseconds} Millisecond(s)`);
  }

  // combine the results.
  return results.join(' ');
};
