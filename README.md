# Across Protocol Constants

Multi-language constants package for chain and token information used by the Across Protocol.

## 📦 Available Packages

This repository generates constants packages for multiple programming languages from a single JSON source of truth:

- **TypeScript/JavaScript**: Published to npm as `@across-protocol/constants`
- **Python**: Available as `across-constants` (generated package)
- **Rust**: Available as `across-constants` (generated crate)

## 🏗️ Architecture

### Single Source of Truth

All chain and token information is maintained in JSON files:

- `data/chains.json` - Chain IDs, network configurations, RPC endpoints
- `data/tokens.json` - Token symbols, addresses, decimals, CoinGecko IDs

### Code Generation

Language-specific packages are automatically generated from the JSON data using:

- `scripts/generate-typescript.js` - Generates TypeScript constants
- `scripts/generate-python.js` - Generates Python package
- `scripts/generate-rust.js` - Generates Rust crate

### Type Safety & Validation

- JSON Schema validation ensures data consistency
- Generated code maintains strict typing in each language
- Constants are preserved (readonly/const/static)

## 🚀 Usage

### TypeScript/JavaScript

```typescript
import { CHAIN_IDs, TOKEN_SYMBOLS_MAP, ChainFamily } from "@across-protocol/constants"

const arbitrumChainId = CHAIN_IDs.ARBITRUM // 42161
const usdcConfig = TOKEN_SYMBOLS_MAP.USDC
const usdcArbitrumAddress = usdcConfig.addresses[CHAIN_IDs.ARBITRUM]
```

### Python

```python
from across_constants import CHAIN_IDS, TOKEN_SYMBOLS_MAP, ChainFamily

arbitrum_chain_id = CHAIN_IDS["ARBITRUM"]  # 42161
usdc_config = TOKEN_SYMBOLS_MAP["USDC"]
usdc_arbitrum_address = usdc_config.addresses[arbitrum_chain_id]
```

### Rust

```rust
use across_constants::{MAINNET_CHAIN_IDS, TOKEN_SYMBOLS_MAP};

let arbitrum_chain_id = MAINNET_CHAIN_IDS.get("ARBITRUM").unwrap(); // &42161
let usdc_config = TOKEN_SYMBOLS_MAP.get("USDC").unwrap();
let usdc_arbitrum_address = usdc_config.addresses.get(arbitrum_chain_id).unwrap();
```

## 🛠️ Development

### Setup

```bash
yarn install
```

### Generate All Packages

```bash
yarn generate
```

### Generate Specific Language

```bash
yarn generate:typescript
yarn generate:python
yarn generate:rust
```

### Validate Data

```bash
yarn validate
```

### Watch Mode (Auto-regenerate)

```bash
yarn watch
```

### Build TypeScript Package

```bash
yarn build
```

## 📂 Project Structure

```
├── data/                          # Source of truth JSON data
│   ├── chains.json               # Chain configurations
│   ├── tokens.json               # Token configurations
│   └── schemas/                  # JSON Schema validation
├── scripts/                      # Code generation scripts
│   ├── generate-all.js           # Generate all languages
│   ├── generate-typescript.js    # TypeScript generator
│   ├── generate-python.js        # Python generator
│   ├── generate-rust.js          # Rust generator
│   ├── validate-data.js          # Schema validation
│   └── watch-data.js             # File watcher
├── src-generated/                # Generated code output
│   ├── typescript/               # Generated TS files
│   ├── python/                   # Generated Python package
│   └── rust/                     # Generated Rust crate
└── src/                          # TypeScript source (copied from generated)
```

## ✨ Benefits

- **Single Source of Truth**: Update once, generate everywhere
- **Type Safety**: Strict typing preserved across all languages
- **Consistency**: Guaranteed consistency across language packages
- **Maintainability**: Easy to add new chains/tokens or support new languages
- **Validation**: JSON Schema ensures data integrity
- **Performance**: Constants are compile-time optimized in each language

## 🔄 Adding New Data

### Adding a New Chain

1. Edit `data/chains.json`
2. Add chain ID to appropriate section (mainnet/testnet)
3. Add network configuration
4. Run `yarn generate` to update all packages

### Adding a New Token

1. Edit `data/tokens.json`
2. Add token configuration with addresses per chain
3. Add CoinGecko ID for pricing
4. Run `yarn generate` to update all packages

### Adding a New Language

1. Create `scripts/generate-[language].js`
2. Implement language-specific code generation
3. Add language target to `scripts/generate-all.js`
4. Update documentation

## 📄 License

AGPL-3.0-only
