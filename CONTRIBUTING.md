# Contributing to TVMazeKit

Thank you for your interest in contributing to TVMazeKit!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kareemelbahrawy/tvmazekit.git
   cd tvmazekit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Build all packages**
   ```bash
   pnpm build
   ```

4. **Run tests**
   ```bash
   pnpm test
   ```

## Project Structure

```
tvmazekit/
├── packages/
│   ├── sdk/          # @tvmazekit/sdk - TypeScript SDK
│   └── mcp/          # @tvmazekit/mcp - MCP server
├── biome.json        # Linting and formatting
├── vitest.config.ts  # Test configuration
└── tsconfig.json     # TypeScript configuration
```

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Run `pnpm lint` to check for linting issues
4. Run `pnpm typecheck` to verify types
5. Run `pnpm test` to ensure tests pass
6. Submit a pull request

## Code Style

This project uses [Biome](https://biomejs.dev/) for linting and formatting. Run `pnpm lint:fix` to automatically fix issues.

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `test:` - Test changes
- `refactor:` - Code refactoring

## Pull Requests

- Keep changes focused and atomic
- Include tests for new functionality
- Update documentation as needed
- Ensure CI passes before requesting review

## Questions?

Open an issue for questions or discussions.
