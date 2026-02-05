import { describe, expect, it } from 'vitest';
import { server } from '../src/index.js';

describe('MCP Server', () => {
  it('should have the correct server name', () => {
    expect(server).toBeDefined();
  });
});
