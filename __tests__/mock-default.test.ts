import { vi, describe, it, expect } from 'vitest';
import { useDefault } from '../src/main.js';

vi.mock('../src/mock.js', () => ({
  default: {
    methodBar: () => 'foo',
    methodFoo: () => 'bar',
  },
}));

describe('mock-default', () => {
  it('should use mock value', () => {
    expect(useDefault().methodBar()).toBe('foo');
    expect(useDefault().methodFoo()).toBe('bar');
  });
});
