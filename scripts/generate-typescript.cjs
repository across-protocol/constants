#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CHAINS_DATA = require('../data/chains.json');
const TOKENS_DATA = require('../data/tokens.json');

function generateTypeScriptNetworks() {
  const { chainFamilies, testnetSepoliaChainIds, testnetChainIds, mainnetChainIds, productionOftEids, testnetOftEids, hyperlaneDomainIdOverrides, constants, networks } = CHAINS_DATA;
  
  let code = `// Chain names and IDs.
export const TESTNET_SEPOLIA_CHAIN_IDs = {
${Object.entries(testnetSepoliaChainIds).map(([key, value]) => `  ${key}: ${value},`).join('\n')}
};

export const TESTNET_CHAIN_IDs = {
  ...TESTNET_SEPOLIA_CHAIN_IDs,
${Object.entries(testnetChainIds).filter(([key]) => !testnetSepoliaChainIds[key]).map(([key, value]) => `  ${key}: ${value},`).join('\n')}
} as const;

export const MAINNET_CHAIN_IDs = {
${Object.entries(mainnetChainIds).map(([key, value]) => `  ${key}: ${value},`).join('\n')}
};

export const CHAIN_IDs = {
  ...MAINNET_CHAIN_IDs,
  ...TESTNET_CHAIN_IDs,
};

export enum ChainFamily {
${Object.entries(chainFamilies).map(([key, value]) => `  ${key} = ${value},`).join('\n')}
}

// Source https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
export const PRODUCTION_OFT_EIDs = {
${Object.entries(productionOftEids).map(([key, value]) => `  ${key}: ${value},`).join('\n')}
};

// Source https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
export const TESTNET_OFT_EIDs = {
${Object.entries(testnetOftEids).map(([key, value]) => `  ${key}: ${value},`).join('\n')}
};

// Collection of Hyperlane domain ids that are different from CHAIN_IDs.
// Source https://github.com/hyperlane-xyz/hyperlane-registry
export const HYPERLANE_DOMAIN_ID_OVERRIDES = {
${Object.entries(hyperlaneDomainIdOverrides).map(([key, value]) => `  ${key}: ${value},`).join('\n')}
};

interface PublicNetwork {
  name: string;
  family: ChainFamily;
  nativeToken: string;
  publicRPC: string; // RPC provider of last resort.
  blockExplorer: string;
  cctpDomain: number;
  oftEid: number;
  hypDomainId: number; // Hyperlane domain id
}

export const CCTP_NO_DOMAIN = ${constants.CCTP_NO_DOMAIN};
export const OFT_NO_EID = ${constants.OFT_NO_EID};
export const HYPERLANE_NO_DOMAIN_ID = ${constants.HYPERLANE_NO_DOMAIN_ID};

const { ${Object.keys(chainFamilies).join(', ')} } = ChainFamily;
export const PRODUCTION_NETWORKS: { [chainId: number]: PublicNetwork } = {
${Object.entries(networks.production).map(([chainId, config]) => {
  // Check both mainnet and testnet chain IDs for the chain name
  const allChainIds = { ...mainnetChainIds, ...testnetChainIds };
  const chainName = Object.entries(allChainIds).find(([, id]) => id.toString() === chainId)?.[0];
  if (!chainName) {
    console.warn(`Warning: No chain name found for production chain ID ${chainId}`);
    return `  // Skipping chain ID ${chainId} - no matching chain name found`;
  }
  return `  [CHAIN_IDs.${chainName}]: {
    name: "${config.name}",
    family: ${config.family === 0 ? 'NONE' : config.family === 1 ? 'OP_STACK' : config.family === 2 ? 'ORBIT' : config.family === 3 ? 'ZK_STACK' : 'SVM'},
    nativeToken: "${config.nativeToken}",
    publicRPC: "${config.publicRPC}",
    blockExplorer: "${config.blockExplorer}",
    cctpDomain: ${config.cctpDomain},
    oftEid: ${config.oftEid === -1 ? 'OFT_NO_EID' : config.oftEid},
    hypDomainId: ${config.hypDomainId === -1 ? 'HYPERLANE_NO_DOMAIN_ID' : config.hypDomainId},
  },`;
}).filter(line => !line.includes('Skipping')).join('\n')}
};

export const TEST_NETWORKS: { [chainId: number]: PublicNetwork } = {
${Object.entries(networks.testnet).map(([chainId, config]) => {
  const chainName = Object.entries(testnetChainIds).find(([, id]) => id.toString() === chainId)?.[0];
  if (!chainName) {
    console.warn(`Warning: No chain name found for testnet chain ID ${chainId}`);
    return `  // Skipping chain ID ${chainId} - no matching chain name found`;
  }
  return `  [CHAIN_IDs.${chainName}]: {
    name: "${config.name}",
    family: ${config.family === 0 ? 'NONE' : config.family === 1 ? 'OP_STACK' : config.family === 2 ? 'ORBIT' : config.family === 3 ? 'ZK_STACK' : 'SVM'},
    nativeToken: "${config.nativeToken}",
    publicRPC: "${config.publicRPC}",
    blockExplorer: "${config.blockExplorer}",
    cctpDomain: ${config.cctpDomain},
    oftEid: ${config.oftEid === -1 ? 'OFT_NO_EID' : config.oftEid},
    hypDomainId: ${config.hypDomainId === -1 ? 'HYPERLANE_NO_DOMAIN_ID' : config.hypDomainId},
  },`;
}).filter(line => !line.includes('Skipping')).join('\n')}
};

export const PUBLIC_NETWORKS = {
  ...PRODUCTION_NETWORKS,
  ...TEST_NETWORKS,
};
`;

  return code;
}

function generateTypeScriptTokens() {
  const { tokens, tokenEquivalenceRemapping } = TOKENS_DATA;
  const { mainnetChainIds, testnetChainIds } = CHAINS_DATA;
  const allChainIds = { ...mainnetChainIds, ...testnetChainIds };

  let code = `import { CHAIN_IDs } from "./networks";

// Information for the supported tokens on each chain.
// NOTE: All addresses should be checksummed
export const TOKEN_SYMBOLS_MAP = {
${Object.entries(tokens).map(([symbol, config]) => {
  const addressEntries = Object.entries(config.addresses).map(([chainId, address]) => {
    const chainName = Object.entries(allChainIds).find(([, id]) => id.toString() === chainId)?.[0];
    if (!chainName) {
      console.warn(`Warning: No chain name found for token ${symbol} address on chain ID ${chainId}`);
      return null;
    }
    return `      [CHAIN_IDs.${chainName}]: "${address}",`;
  }).filter(line => line !== null).join('\n');
  
  // Quote symbol if it contains special characters
  const quotedSymbol = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(symbol) ? symbol : `"${symbol}"`;
  
  return `  ${quotedSymbol}: {
    name: "${config.name}",
    symbol: "${config.symbol}",
    decimals: ${config.decimals},
    addresses: {
${addressEntries}
    },
    coingeckoId: "${config.coingeckoId}",${config.l1TokenDecimals ? `\n    l1TokenDecimals: ${config.l1TokenDecimals},` : ''}
  },`;
}).join('\n')}
};

// Hard-coded mapping of token symbols that should be treated as having equivalent
// prices. The right-hand side should map to a token symbol in TOKEN_SYMBOLS_MAP.
export const TOKEN_EQUIVALENCE_REMAPPING: { [symbol: string]: string } = {
${Object.entries(tokenEquivalenceRemapping).map(([from, to]) => {
  // Use string key for the from value, and check if to needs quotes
  const fromKey = `"${from}"`;
  const toKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(to) ? `TOKEN_SYMBOLS_MAP.${to}.symbol` : `TOKEN_SYMBOLS_MAP["${to}"].symbol`;
  return `  ${fromKey}: ${toKey},`;
}).join('\n')}
};
`;

  return code;
}

function generateTypeScriptIndex() {
  return `export * from "./networks";
export * from "./tokens";
`;
}

// Create output directory
const outputDir = path.join(__dirname, '../src-generated/typescript');
fs.mkdirSync(outputDir, { recursive: true });

// Generate files
fs.writeFileSync(path.join(outputDir, 'networks.ts'), generateTypeScriptNetworks());
fs.writeFileSync(path.join(outputDir, 'tokens.ts'), generateTypeScriptTokens());
fs.writeFileSync(path.join(outputDir, 'index.ts'), generateTypeScriptIndex());

console.log('✅ TypeScript files generated successfully');