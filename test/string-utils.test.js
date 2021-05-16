'use strict';

const StringUtils = require('../lib/string-utils');

//======================================================================================
// isEmpty
//======================================================================================

test('isEmpty empty value returns true', () => {
  expect(StringUtils.isEmpty()).toBeTruthy();
});

test('isEmpty null value returns true', () => {
  expect(StringUtils.isEmpty(null)).toBeTruthy();
});

test('isEmpty empty string returns true', () => {
  expect(StringUtils.isEmpty('')).toBeTruthy();
});

test('isEmpty test returns false', () => {
  expect(StringUtils.isEmpty('test')).toBeFalsy();
});

test('isEmpty empty object returns true', () => {
  expect(StringUtils.isEmpty({})).toBeTruthy();
});

test('isEmpty 0 returns false', () => {
  expect(StringUtils.isEmpty(0)).toBeFalsy();
});

test('isEmpty 1 returns false', () => {
  expect(StringUtils.isEmpty(1)).toBeFalsy();
});

//======================================================================================
// contains
//======================================================================================

test('contains empty value returns false', () => {
  expect(StringUtils.contains()).toBeFalsy();
});

test('contains null value returns false', () => {
  expect(StringUtils.contains(null)).toBeFalsy();
});

test('contains (test, e) returns true', () => {
  expect(StringUtils.contains('test', 'e')).toBeTruthy();
});

test('contains (test, E, true) returns false', () => {
  expect(StringUtils.contains('test', 'E', true)).toBeFalsy();
});

//======================================================================================
// prettyPrintJSON
//======================================================================================

test('prettyPrintJSON empty value returns empty string', () => {
  expect(StringUtils.prettyPrintJSON()).toBe('');
});

test('prettyPrintJSON null value returns empty string', () => {
  expect(StringUtils.prettyPrintJSON(null)).toBe('');
});

test('prettyPrintJSON empty object returns {}', () => {
  expect(StringUtils.prettyPrintJSON({})).toBe('{}');
});

test('prettyPrintJSON { "test": "test" } returns correct format', () => {
  expect(StringUtils.prettyPrintJSON({ "test": "test" }))
    .toBe('{\n  \"test\": \"test\"\n}');
});

test('prettyPrintJSON ({ "test": "test" }, 4) returns correct format', () => {
  expect(StringUtils.prettyPrintJSON({ "test": "test" }, 4))
    .toBe('{\n    \"test\": \"test\"\n}');
});
