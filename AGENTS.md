# AGENTS.md - constants

This repository contains `@across-protocol/constants` — a shared library exporting network, token, and address definitions used across the Across Protocol ecosystem.

## How to use docs in this repo

1. This file (`AGENTS.md`) for navigation and conventions.
2. `src/index.ts` re-exports everything from `networks.ts` and `tokens.ts`.

## Documentation maintenance

Update this `AGENTS.md` when new source files are added or the build/publish process changes.

## Quick index

- Entry point: `src/index.ts`
- Network/chain definitions: `src/networks.ts`
- Token mappings and metadata: `src/tokens.ts`
- Build output: `dist/` (cjs, esm, types)
- Publish workflow: `.github/workflows/publish.yml`

## Source files

| File | Purpose | Key exports |
|------|---------|-------------|
| `src/index.ts` | Barrel re-export | Re-exports `networks` and `tokens` |
| `src/networks.ts` | Chain ID constants | Testnet and mainnet chain IDs, chain metadata (~620 lines) |
| `src/tokens.ts` | Token definitions | `TOKEN_SYMBOLS_MAP` with name, symbol, decimals, per-chain addresses, coingeckoId (~730 lines) |

## Directory tree

```text
constants/
├── src/
│   ├── index.ts                      # Barrel export
│   ├── networks.ts                   # Chain/network definitions
│   └── tokens.ts                     # Token metadata and addresses
├── dist/                             # Build output (generated)
│   ├── cjs/                          # CommonJS build
│   ├── esm/                          # ES Modules build
│   └── types/                        # TypeScript declarations
├── package.json                      # @across-protocol/constants, Yarn
├── tsconfig.json                     # TypeScript config (strict, ES5 target)
├── .eslintrc.cjs                     # ESLint config
├── .prettierrc                       # Prettier (120 printWidth)
└── .github/workflows/publish.yml     # NPM publish on GitHub release
```

## Build and test

```bash
# Build (CJS + ESM + types)
yarn build

# Lint
yarn lint

# Auto-fix
yarn lint-fix
```

There are no tests — this is a pure data library.

## Adding new tokens or networks

1. **New network**: Add chain ID constant to `src/networks.ts`.
2. **New token**: Add entry to `TOKEN_SYMBOLS_MAP` in `src/tokens.ts` with name, symbol, decimals, per-chain addresses, and coingeckoId.
3. Run `yarn lint-fix` and `yarn build` to verify.

## Publish process

- Published to npm via GitHub Actions on GitHub release.
- Workflow validates semver, builds, and publishes with OIDC trusted publishing.
- Pre-release versions supported for beta/canary tags.

## Consumers

This package is consumed by: relayer, indexer, frontend, and toolkit.
