# Across Constants

[![npm](https://img.shields.io/npm/v/@across-protocol/constants)](https://www.npmjs.com/package/@across-protocol/constants)

Shared library exporting network, token, and address definitions used across the Across Protocol ecosystem.

## Installation

```bash
# npm
npm install @across-protocol/constants

# yarn
yarn add @across-protocol/constants
```

## Usage

```typescript
import { TOKEN_SYMBOLS_MAP } from "@across-protocol/constants";

// Access token metadata
const usdc = TOKEN_SYMBOLS_MAP.USDC;
console.log(usdc.decimals); // 6
console.log(usdc.addresses[1]); // Ethereum mainnet address
```

## What's Exported

| Module     | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| `networks` | Chain ID constants for testnets and mainnets, chain metadata                         |
| `tokens`   | `TOKEN_SYMBOLS_MAP` — token name, symbol, decimals, per-chain addresses, coingeckoId |

## Development

```bash
# Build (CJS + ESM + TypeScript declarations)
yarn build

# Lint
yarn lint

# Auto-fix lint issues
yarn lint-fix
```

## Adding Tokens or Networks

1. **New network**: Add chain ID constant to `src/networks.ts`.
2. **New token**: Add entry to `TOKEN_SYMBOLS_MAP` in `src/tokens.ts`.
3. Run `yarn lint-fix && yarn build` to verify.

## Publishing

Published to npm automatically via GitHub Actions on [GitHub release](https://github.com/across-protocol/constants/releases). Supports pre-release versions for beta/canary tags.

## License

AGPL-3.0-only
