#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CHAINS_DATA = require('../data/chains.json');
const TOKENS_DATA = require('../data/tokens.json');

function toRustConstant(name) {
  return name.toUpperCase();
}

function generateRustNetworks() {
  const { chainFamilies, testnetSepoliaChainIds, testnetChainIds, mainnetChainIds, productionOftEids, testnetOftEids, hyperlaneDomainIdOverrides, constants, networks } = CHAINS_DATA;
  
  let code = `//! Chain names and IDs.

use std::collections::HashMap;
use once_cell::sync::Lazy;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
#[repr(u8)]
pub enum ChainFamily {
${Object.entries(chainFamilies).map(([key, value]) => `    ${key.charAt(0) + key.slice(1).toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())} = ${value},`).join('\n')}
}

// Chain ID constants
${Object.entries(testnetSepoliaChainIds).map(([key, value]) => `pub const TESTNET_SEPOLIA_${key}: u64 = ${value};`).join('\n')}

${Object.entries(testnetChainIds).filter(([key]) => !testnetSepoliaChainIds[key]).map(([key, value]) => `pub const TESTNET_${key}: u64 = ${value};`).join('\n')}

${Object.entries(mainnetChainIds).map(([key, value]) => `pub const MAINNET_${key}: u64 = ${value};`).join('\n')}

// LayerZero Endpoint IDs
${Object.entries(productionOftEids).map(([key, value]) => `pub const PRODUCTION_OFT_EID_${key}: u32 = ${value};`).join('\n')}

${Object.entries(testnetOftEids).map(([key, value]) => `pub const TESTNET_OFT_EID_${key}: u32 = ${value};`).join('\n')}

// Hyperlane domain ID overrides
${Object.entries(hyperlaneDomainIdOverrides).map(([key, value]) => `pub const HYPERLANE_DOMAIN_${key}: u32 = ${value};`).join('\n')}

// Constants
pub const CCTP_NO_DOMAIN: i32 = ${constants.CCTP_NO_DOMAIN};
pub const OFT_NO_EID: i32 = ${constants.OFT_NO_EID};
pub const HYPERLANE_NO_DOMAIN_ID: i32 = ${constants.HYPERLANE_NO_DOMAIN_ID};

#[derive(Debug, Clone)]
pub struct PublicNetwork {
    pub name: &'static str,
    pub family: ChainFamily,
    pub native_token: &'static str,
    pub public_rpc: &'static str,
    pub block_explorer: &'static str,
    pub cctp_domain: i32,
    pub oft_eid: i32,
    pub hyp_domain_id: i32,
}

impl PublicNetwork {
    pub const fn new(
        name: &'static str,
        family: ChainFamily,
        native_token: &'static str,
        public_rpc: &'static str,
        block_explorer: &'static str,
        cctp_domain: i32,
        oft_eid: i32,
        hyp_domain_id: i32,
    ) -> Self {
        Self {
            name,
            family,
            native_token,
            public_rpc,
            block_explorer,
            cctp_domain,
            oft_eid,
            hyp_domain_id,
        }
    }
}

pub static TESTNET_SEPOLIA_CHAIN_IDS: Lazy<HashMap<&'static str, u64>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(testnetSepoliaChainIds).map(([key, value]) => `    m.insert("${key}", ${value});`).join('\n')}
    m
});

pub static TESTNET_CHAIN_IDS: Lazy<HashMap<&'static str, u64>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(testnetChainIds).map(([key, value]) => `    m.insert("${key}", ${value});`).join('\n')}
    m
});

pub static MAINNET_CHAIN_IDS: Lazy<HashMap<&'static str, u64>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(mainnetChainIds).map(([key, value]) => `    m.insert("${key}", ${value});`).join('\n')}
    m
});

pub static PRODUCTION_NETWORKS: Lazy<HashMap<u64, PublicNetwork>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(networks.production).map(([chainId, config]) => {
  const chainName = Object.entries(mainnetChainIds).find(([, id]) => id.toString() === chainId)?.[0];
  const familyName = Object.entries(chainFamilies).find(([, value]) => value === config.family)?.[0];
  const rustFamilyName = familyName.charAt(0) + familyName.slice(1).toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  return `    m.insert(${chainId}, PublicNetwork::new(
        "${config.name}",
        ChainFamily::${rustFamilyName},
        "${config.nativeToken}",
        "${config.publicRPC}",
        "${config.blockExplorer}",
        ${config.cctpDomain},
        ${config.oftEid},
        ${config.hypDomainId},
    ));`;
}).join('\n')}
    m
});

pub static TEST_NETWORKS: Lazy<HashMap<u64, PublicNetwork>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(networks.testnet).map(([chainId, config]) => {
  const chainName = Object.entries(testnetChainIds).find(([, id]) => id.toString() === chainId)?.[0];
  const familyName = Object.entries(chainFamilies).find(([, value]) => value === config.family)?.[0];
  const rustFamilyName = familyName.charAt(0) + familyName.slice(1).toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  return `    m.insert(${chainId}, PublicNetwork::new(
        "${config.name}",
        ChainFamily::${rustFamilyName},
        "${config.nativeToken}",
        "${config.publicRPC}",
        "${config.blockExplorer}",
        ${config.cctpDomain},
        ${config.oftEid},
        ${config.hypDomainId},
    ));`;
}).join('\n')}
    m
});

pub static PUBLIC_NETWORKS: Lazy<HashMap<u64, PublicNetwork>> = Lazy::new(|| {
    let mut m = HashMap::new();
    m.extend(PRODUCTION_NETWORKS.iter().map(|(&k, v)| (k, v.clone())));
    m.extend(TEST_NETWORKS.iter().map(|(&k, v)| (k, v.clone())));
    m
});
`;

  return code;
}

function generateRustTokens() {
  const { tokens, tokenEquivalenceRemapping } = TOKENS_DATA;
  const { mainnetChainIds, testnetChainIds } = CHAINS_DATA;
  const allChainIds = { ...mainnetChainIds, ...testnetChainIds };

  let code = `//! Token information and addresses.

use std::collections::HashMap;
use once_cell::sync::Lazy;

#[derive(Debug, Clone)]
pub struct TokenConfig {
    pub name: &'static str,
    pub symbol: &'static str,
    pub decimals: u8,
    pub addresses: HashMap<u64, &'static str>,
    pub coingecko_id: &'static str,
    pub l1_token_decimals: Option<u8>,
}

impl TokenConfig {
    pub const fn new(
        name: &'static str,
        symbol: &'static str,
        decimals: u8,
        coingecko_id: &'static str,
        l1_token_decimals: Option<u8>,
    ) -> Self {
        Self {
            name,
            symbol,
            decimals,
            addresses: HashMap::new(),
            coingecko_id,
            l1_token_decimals,
        }
    }
}

// Information for the supported tokens on each chain.
// NOTE: All addresses should be checksummed
pub static TOKEN_SYMBOLS_MAP: Lazy<HashMap<&'static str, TokenConfig>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(tokens).map(([symbol, config]) => {
  const addressLines = Object.entries(config.addresses).map(([chainId, address]) => {
    return `        addresses.insert(${chainId}, "${address}");`;
  }).join('\n');
  
  return `
    {
        let mut addresses = HashMap::new();
${addressLines}
        let mut token = TokenConfig::new(
            "${config.name}",
            "${config.symbol}",
            ${config.decimals},
            "${config.coingeckoId}",
            ${config.l1TokenDecimals ? `Some(${config.l1TokenDecimals})` : 'None'},
        );
        token.addresses = addresses;
        m.insert("${symbol}", token);
    }`;
}).join('\n')}
    m
});

// Hard-coded mapping of token symbols that should be treated as having equivalent
// prices. The right-hand side should map to a token symbol in TOKEN_SYMBOLS_MAP.
pub static TOKEN_EQUIVALENCE_REMAPPING: Lazy<HashMap<&'static str, &'static str>> = Lazy::new(|| {
    let mut m = HashMap::new();
${Object.entries(tokenEquivalenceRemapping).map(([from, to]) => `    m.insert("${from}", "${to}");`).join('\n')}
    m
});
`;

  return code;
}

function generateRustLib() {
  return `//! Across Protocol constants for Rust.
//!
//! This crate provides chain and token constants used by the Across Protocol.

pub mod networks;
pub mod tokens;

pub use networks::*;
pub use tokens::*;

/// Version of the constants package
pub const VERSION: &str = "3.1.76";
`;
}

function generateRustCargo() {
  return `[package]
name = "across-constants"
version = "3.1.76"
edition = "2021"
authors = ["Across Protocol <hello@umaproject.org>"]
description = "Export commonly re-used values for Across repositories"
repository = "https://github.com/across-protocol/constants"
license = "AGPL-3.0-only"
readme = "README.md"
keywords = ["across", "blockchain", "constants"]
categories = ["api-bindings", "config"]

[dependencies]
once_cell = "1.19"

[dev-dependencies]
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
`;
}

function generateRustReadme() {
  return `# Across Constants (Rust)

Rust crate containing chain and token constants for the Across Protocol.

## Installation

Add this to your \`Cargo.toml\`:

\`\`\`toml
[dependencies]
across-constants = "3.1.76"
\`\`\`

## Usage

\`\`\`rust
use across_constants::{MAINNET_CHAIN_IDS, TOKEN_SYMBOLS_MAP, ChainFamily};

fn main() {
    // Get chain ID for Arbitrum
    let arbitrum_chain_id = MAINNET_CHAIN_IDS.get("ARBITRUM").unwrap();
    
    // Get USDC token config
    let usdc_config = TOKEN_SYMBOLS_MAP.get("USDC").unwrap();
    println!("USDC decimals: {}", usdc_config.decimals);
    
    // Get USDC address on Arbitrum
    let usdc_arbitrum_address = usdc_config.addresses.get(arbitrum_chain_id).unwrap();
    println!("USDC on Arbitrum: {}", usdc_arbitrum_address);
}
\`\`\`

## Generated Code

This crate is automatically generated from JSON data sources. Do not edit the generated files directly.
`;
}

// Create output directory
const outputDir = path.join(__dirname, '../src-generated/rust');
const srcDir = path.join(outputDir, 'src');
fs.mkdirSync(srcDir, { recursive: true });

// Generate files
fs.writeFileSync(path.join(srcDir, 'networks.rs'), generateRustNetworks());
fs.writeFileSync(path.join(srcDir, 'tokens.rs'), generateRustTokens());
fs.writeFileSync(path.join(srcDir, 'lib.rs'), generateRustLib());
fs.writeFileSync(path.join(outputDir, 'Cargo.toml'), generateRustCargo());
fs.writeFileSync(path.join(outputDir, 'README.md'), generateRustReadme());

console.log('✅ Rust files generated successfully');