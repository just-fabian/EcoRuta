import { describe, expect, test } from 'vitest';
import { validateEmail, validatePassword } from '../utils/validation';

describe('Validation', () => {
  test('Should validate an email', () => {
    expect(validateEmail('sebasthianPolloloco@hotmail.com')).toBe(true);
    expect(validateEmail('@gmail.com')).toBe(false);
    expect(validateEmail('123@gmail.com')).toBe(true);
    expect(validateEmail('12 34@gmail.com')).toBe(false);
    expect(validateEmail('(guadalupeToño@gmail.com')).toBe(false);
  });
  test('Should validate a password', () => {
    expect(validatePassword('@Gmail1')).toBe(true);
    expect(validatePassword('Pepito')).toBe(false);
    expect(validatePassword('Juan?f')).toBe(false);
    expect(validatePassword('L3Chug@')).toBe(true);
    expect(validatePassword('0123456789Abcde16')).toBe(false);
  });
});
