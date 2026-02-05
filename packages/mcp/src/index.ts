#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'tvmazekit-mcp',
  version: '0.0.0',
});

server.registerTool(
  'hello_world',
  {
    description: 'Returns a greeting to validate MCP is working',
    inputSchema: z.object({}),
  },
  async () => ({
    content: [{ type: 'text', text: 'Hello from TVMazeKit MCP!' }],
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);

export { server };
