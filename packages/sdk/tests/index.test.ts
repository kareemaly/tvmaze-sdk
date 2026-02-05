import { describe, expect, it, vi } from 'vitest';
import { hello } from '../src/index.js';

describe('hello', () => {
  it('should return the greeting message', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const result = hello();
    expect(result).toBe('Hello from TVMazeKit SDK!');
    expect(consoleSpy).toHaveBeenCalledWith('Hello from TVMazeKit SDK!');
    consoleSpy.mockRestore();
  });
});
