'use strict';

const TimerUtils = require('../lib/timer-utils');

//======================================================================================
// getTimeDifferenceString
//======================================================================================

describe('getTimeDifferenceString', () => {
  test('getTimeDifferenceString null returns empty string', () => {
    expect(TimerUtils.getTimeDifferenceString(null, null))
      .toBe('');
  });

  test('getTimeDifferenceString null returns empty string', () => {
    expect(TimerUtils.getTimeDifferenceString(12345, 132450))
      .toBe('2 Minute(s) 0 Second(s)');
  });

  test('getTimeDifferenceString null returns empty string', () => {
    expect(TimerUtils.getTimeDifferenceString(Date.now()).length)
      .toBeGreaterThanOrEqual(16);
  });
});

//======================================================================================
// formatTime
//======================================================================================

describe('formatTime', () => {
  test('formatTime null returns empty string', () => {
    expect(TimerUtils.formatTime(null))
      .toBe('');
  });

  test('formatTime empty value returns empty string', () => {
    expect(TimerUtils.formatTime())
      .toBe('');
  });

  test('formatTime 1 returns 1 Millisecond(s)', () => {
    expect(TimerUtils.formatTime(1))
      .toBe('1 Millisecond(s)');
  });

  test('formatTime 1000 returns 1 Second(s)', () => {
    expect(TimerUtils.formatTime(1000))
      .toBe('1 Second(s)');
  });

  test('formatTime 60000 returns 1 Minute(s) 0 Second(s)', () => {
    expect(TimerUtils.formatTime(60000))
      .toBe('1 Minute(s) 0 Second(s)');
  });

  test('formatTime 6000000 returns 1 Hour(s) 0 Minute(s) 0 Second(s)', () => {
    expect(TimerUtils.formatTime(3600000))
      .toBe('1 Hour(s) 0 Minute(s) 0 Second(s)');
  });
});
