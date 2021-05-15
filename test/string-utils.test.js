'use strict';

const StringUtils = require('../lib/string-utils');

test('isEmpty', () => {
  expect(StringUtils.isEmpty()).toBeTruthy();
  expect(StringUtils.isEmpty(null)).toBeTruthy();
  expect(StringUtils.isEmpty(undefined)).toBeTruthy();
  expect(StringUtils.isEmpty('')).toBeTruthy();
  expect(StringUtils.isEmpty('test')).toBeFalsy();
  expect(StringUtils.isEmpty(0)).toBeFalsy();
  expect(StringUtils.isEmpty(1)).toBeFalsy();
});

test('contains', () => {
  expect(StringUtils.contains()).toBeFalsy();
  expect(StringUtils.contains(null, null)).toBeFalsy();
  expect(StringUtils.contains(undefined, undefined)).toBeFalsy();
  expect(StringUtils.contains('test', 'e')).toBeTruthy();
  expect(StringUtils.contains('test', 'E', true)).toBeFalsy();
});

test('prettyPrintJSON', () => {
  expect(StringUtils.prettyPrintJSON()).toBe('');
  expect(StringUtils.prettyPrintJSON(null)).toBe('');
  expect(StringUtils.prettyPrintJSON(undefined)).toBe('');
  expect(StringUtils.prettyPrintJSON({})).toBe('{}');
  expect(StringUtils.prettyPrintJSON({ "test": "test" })).toBe('{\n  \"test\": \"test\"\n}');
  expect(StringUtils.prettyPrintJSON({ "test": "test" }, 4)).toBe('{\n    \"test\": \"test\"\n}');
});
