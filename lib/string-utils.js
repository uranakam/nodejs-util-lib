'use strict';

// module dependencies.
const _ = require('lodash');

/**
 * Checks if a string contains another string.
 * @param string - The main string to search through.
 * @param match - the search text.
 * @param caseSensitive - If the match should be case sensitive.
 * @returns {boolean} - If the search text is present in the main string.
 */
exports.contains = (string, match, caseSensitive = false) => {
  if (string && match) {
    if (caseSensitive) {
      return (string.trim().indexOf(match) !== -1);
    }
    else {
      return (string.trim().toLowerCase().indexOf(match.toLowerCase()) !== -1);
    }
  }
  else {
    return false;
  }
};

/**
 * Checks if a value is undefined, null or empty.
 * @param value - the value to check.
 * @param [ignoreWhiteSpace] - Ignores white space when checking.
 * @returns {*} - if it is empty it returns true, else returns false.
 */
exports.isEmpty = (value, ignoreWhiteSpace = false) => {
  let stringValue = '';

  if (!_.isUndefined(value) && !_.isNull(value) && !_.isObject(value)) {
    stringValue = value.toString();
    if (ignoreWhiteSpace) {
      stringValue = stringValue.trim();
    }
  }

  return (_.isEmpty(stringValue));
};

/**
 * Returns an object as a nice string formatted JSON string.
 * @param obj - The object to print.
 * @param spacing - The number of spaces to format the JSON string. Defaults to 2.
 * @returns {string} - The object as a nicely formatted JSON string.
 */
exports.prettyPrintJSON = (obj, spacing = 2) => {
  if (_.isUndefined(obj) || _.isNull(obj)) {
    return '';
  }

  const spacingStr = _.times(spacing, _.constant(' ')).join('');
  return JSON.stringify(obj, null, spacingStr);
};

/**
 * Replaces all matched values of a string.
 * @param stringValue - the full string value to perform the replace all on.
 * @param valueToReplace - The value that is being replaced.
 * @param replaceWith - The value to replace with.
 */
exports.replaceAll = (stringValue, valueToReplace, replaceWith) => {
  /* eslint-disable no-useless-escape */
  const escapedChars = valueToReplace.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return stringValue.replace(new RegExp(escapedChars, 'g'), replaceWith);
};

/**
 * Splits a string delimited list of strings into an array.
 * @param value - The value.
 * @param delimiter - The delimiter. Defaults to ','
 */
exports.splitAndTrimString = (value, delimiter = ',') => {
  if (exports.isEmpty(value)) {
    return [];
  }

  return value.split(delimiter).map(item => {
    return item.trim();
  });
};
