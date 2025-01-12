import { hello } from '@nx-jest-local-library-problem/my-lib';

describe('App Tests', () => {
  it('should greet properly', () => {
    const greeting = hello('Test');
    expect(greeting).toBe('Hello, Test!');
  });
});
