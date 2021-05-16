'use strict';

const StringUtils = require('../lib/string-utils');

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

test('isEmpty " " returns false', () => {
  expect(StringUtils.isEmpty(' ')).toBeFalsy();
});

test('isEmpty " " returns true', () => {
  expect(StringUtils.isEmpty(' ', true)).toBeTruthy();
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

//======================================================================================
// replaceAll
//======================================================================================

test('replaceAll empty value returns null', () => {
  expect(StringUtils.replaceAll()).toBe(null);
});

test('replaceAll null value returns null', () => {
  expect(StringUtils.replaceAll(null, null, null)).toBe(null);
});

test('replaceAll (hello, ello, ey) value returns hey', () => {
  expect(StringUtils.replaceAll('hello', 'ello', 'ey'))
    .toBe('hey');
});

//======================================================================================
// splitAndTrimString
//======================================================================================

test('splitAndTrimString empty value returns []', () => {
  expect(StringUtils.splitAndTrimString())
    .toEqual(expect.arrayContaining([]));
});

test('splitAndTrimString empty string returns []', () => {
  expect(StringUtils.splitAndTrimString(''))
    .toEqual(expect.arrayContaining([]));
});

test('splitAndTrimString "test, test" value returns ["test" , "test"]', () => {
  expect(StringUtils.splitAndTrimString('test, test'))
    .toEqual(expect.arrayContaining(['test', 'test']));
});

test('splitAndTrimString "test; test" value returns ["test;test"]', () => {
  expect(StringUtils.splitAndTrimString('test; test'))
    .toEqual(expect.arrayContaining(['test; test']));
});

test('splitAndTrimString "test; test" value returns ["test", "test"]', () => {
  expect(StringUtils.splitAndTrimString('test; test', ';'))
    .toEqual(expect.arrayContaining(['test', 'test']));
});
