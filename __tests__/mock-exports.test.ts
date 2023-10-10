import { vi, describe, it, expect } from 'vitest';
import { useMethodFoo, useMethodBar } from '../src/main.js';

vi.mock('../src/mock.js', () => ({
  methodBar: () => 'foo',
  methodFoo: () => 'bar',
}));

describe('mock-exports', () => {
  it('should use mock value', () => {
    expect(useMethodFoo()).toBe('bar');
    expect(useMethodBar()).toBe('foo');
  });
});
