NodeJS Utility Library
======================

[![Node.js Package](https://github.com/uranakam/nodejs-util-lib/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/uranakam/nodejs-util-lib/actions/workflows/npm-publish.yml)
[![CodeQL](https://github.com/uranakam/nodejs-util-lib/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/uranakam/nodejs-util-lib/actions/workflows/codeql-analysis.yml)
## Available Utility Types:

- String Utilities
- Timer Utilities

## Usage Example:

```
const { 
  StringUtils, 
  TimerUtils
} = require('nodejs-util-lib');
```

# String Utility Functions:

```contains(value, match, caseSensitive=false)``` - Checks if a string contains another string.

```isEmpty(value, ignoreWhiteSpace=false)``` - Checks if a value is undefined, null or empty.

```prettyPrintJSON(object, spacing=2) ``` - Returns an object as a nice string formatted JSON string.

```replaceAll(value, valueToReplace, replaceWith)``` - Replaces all matched values of a string.

```splitAndTrimString(value, delimiter=',')``` - Splits a string delimited list of strings into an array.

# Timer Utility Functions:

```formatTime(milliseconds)``` - Converts a time in milliseconds to a nice formatted string.

```getTimeDifferenceString(start, end=Date.now())``` - Used to nicely print the time difference between 2 times(milliseconds).
