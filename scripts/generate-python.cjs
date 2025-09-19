#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CHAINS_DATA = require('../data/chains.json');
const TOKENS_DATA = require('../data/tokens.json');

function toPythonConstant(name) {
  return name.toUpperCase();
}

function generatePythonNetworks() {
  const { chainFamilies, testnetSepoliaChainIds, testnetChainIds, mainnetChainIds, productionOftEids, testnetOftEids, hyperlaneDomainIdOverrides, constants, networks } = CHAINS_DATA;
  
  let code = `"""Chain names and IDs."""

from enum import IntEnum
from typing import Dict, Any, Final


# Chain IDs
TESTNET_SEPOLIA_CHAIN_IDS: Final[Dict[str, int]] = {
${Object.entries(testnetSepoliaChainIds).map(([key, value]) => `    "${key}": ${value},`).join('\n')}
}

TESTNET_CHAIN_IDS: Final[Dict[str, int]] = {
    **TESTNET_SEPOLIA_CHAIN_IDS,
${Object.entries(testnetChainIds).filter(([key]) => !testnetSepoliaChainIds[key]).map(([key, value]) => `    "${key}": ${value},`).join('\n')}
}

MAINNET_CHAIN_IDS: Final[Dict[str, int]] = {
${Object.entries(mainnetChainIds).map(([key, value]) => `    "${key}": ${value},`).join('\n')}
}

CHAIN_IDS: Final[Dict[str, int]] = {
    **MAINNET_CHAIN_IDS,
    **TESTNET_CHAIN_IDS,
}


class ChainFamily(IntEnum):
    """Blockchain family types."""
${Object.entries(chainFamilies).map(([key, value]) => `    ${key} = ${value}`).join('\n')}


# LayerZero Endpoint IDs
# Source: https://docs.layerzero.network/v2/developers/evm/technical-reference/deployed-contracts
PRODUCTION_OFT_EIDS: Final[Dict[str, int]] = {
${Object.entries(productionOftEids).map(([key, value]) => `    "${key}": ${value},`).join('\n')}
}

TESTNET_OFT_EIDS: Final[Dict[str, int]] = {
${Object.entries(testnetOftEids).map(([key, value]) => `    "${key}": ${value},`).join('\n')}
}

# Hyperlane domain ID overrides
# Source: https://github.com/hyperlane-xyz/hyperlane-registry
HYPERLANE_DOMAIN_ID_OVERRIDES: Final[Dict[str, int]] = {
${Object.entries(hyperlaneDomainIdOverrides).map(([key, value]) => `    "${key}": ${value},`).join('\n')}
}

# Constants
CCTP_NO_DOMAIN: Final[int] = ${constants.CCTP_NO_DOMAIN}
OFT_NO_EID: Final[int] = ${constants.OFT_NO_EID}
HYPERLANE_NO_DOMAIN_ID: Final[int] = ${constants.HYPERLANE_NO_DOMAIN_ID}


class PublicNetwork:
    """Network configuration."""
    
    def __init__(
        self,
        name: str,
        family: ChainFamily,
        native_token: str,
        public_rpc: str,
        block_explorer: str,
        cctp_domain: int,
        oft_eid: int,
        hyp_domain_id: int,
    ):
        self.name = name
        self.family = family
        self.native_token = native_token
        self.public_rpc = public_rpc
        self.block_explorer = block_explorer
        self.cctp_domain = cctp_domain
        self.oft_eid = oft_eid
        self.hyp_domain_id = hyp_domain_id

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            "name": self.name,
            "family": self.family,
            "native_token": self.native_token,
            "public_rpc": self.public_rpc,
            "block_explorer": self.block_explorer,
            "cctp_domain": self.cctp_domain,
            "oft_eid": self.oft_eid,
            "hyp_domain_id": self.hyp_domain_id,
        }


PRODUCTION_NETWORKS: Final[Dict[int, PublicNetwork]] = {
${Object.entries(networks.production).map(([chainId, config]) => {
  const chainName = Object.entries(mainnetChainIds).find(([, id]) => id.toString() === chainId)?.[0];
  const familyName = Object.entries(chainFamilies).find(([, value]) => value === config.family)?.[0];
  return `    CHAIN_IDS["${chainName}"]: PublicNetwork(
        name="${config.name}",
        family=ChainFamily.${familyName},
        native_token="${config.nativeToken}",
        public_rpc="${config.publicRPC}",
        block_explorer="${config.blockExplorer}",
        cctp_domain=${config.cctpDomain},
        oft_eid=${config.oftEid},
        hyp_domain_id=${config.hypDomainId},
    ),`;
}).join('\n')}
}

TEST_NETWORKS: Final[Dict[int, PublicNetwork]] = {
${Object.entries(networks.testnet).map(([chainId, config]) => {
  const chainName = Object.entries(testnetChainIds).find(([, id]) => id.toString() === chainId)?.[0];
  const familyName = Object.entries(chainFamilies).find(([, value]) => value === config.family)?.[0];
  return `    CHAIN_IDS["${chainName}"]: PublicNetwork(
        name="${config.name}",
        family=ChainFamily.${familyName},
        native_token="${config.nativeToken}",
        public_rpc="${config.publicRPC}",
        block_explorer="${config.blockExplorer}",
        cctp_domain=${config.cctpDomain},
        oft_eid=${config.oftEid},
        hyp_domain_id=${config.hypDomainId},
    ),`;
}).join('\n')}
}

PUBLIC_NETWORKS: Final[Dict[int, PublicNetwork]] = {
    **PRODUCTION_NETWORKS,
    **TEST_NETWORKS,
}
`;

  return code;
}

function generatePythonTokens() {
  const { tokens, tokenEquivalenceRemapping } = TOKENS_DATA;
  const { mainnetChainIds, testnetChainIds } = CHAINS_DATA;
  const allChainIds = { ...mainnetChainIds, ...testnetChainIds };

  let code = `"""Token information and addresses."""

from typing import Dict, Any, Optional, Final
from .networks import CHAIN_IDS


class TokenConfig:
    """Token configuration."""
    
    def __init__(
        self,
        name: str,
        symbol: str,
        decimals: int,
        addresses: Dict[int, str],
        coingecko_id: str,
        l1_token_decimals: Optional[int] = None,
    ):
        self.name = name
        self.symbol = symbol
        self.decimals = decimals
        self.addresses = addresses
        self.coingecko_id = coingecko_id
        self.l1_token_decimals = l1_token_decimals

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        result = {
            "name": self.name,
            "symbol": self.symbol,
            "decimals": self.decimals,
            "addresses": self.addresses,
            "coingecko_id": self.coingecko_id,
        }
        if self.l1_token_decimals is not None:
            result["l1_token_decimals"] = self.l1_token_decimals
        return result


# Information for the supported tokens on each chain.
# NOTE: All addresses should be checksummed
TOKEN_SYMBOLS_MAP: Final[Dict[str, TokenConfig]] = {
${Object.entries(tokens).map(([symbol, config]) => {
  const addressEntries = Object.entries(config.addresses).map(([chainId, address]) => {
    const chainName = Object.entries(allChainIds).find(([, id]) => id.toString() === chainId)?.[0];
    return `        CHAIN_IDS["${chainName}"]: "${address}",`;
  }).join('\n');
  
  const l1Decimals = config.l1TokenDecimals ? `,\n        l1_token_decimals=${config.l1TokenDecimals}` : '';
  
  return `    "${symbol}": TokenConfig(
        name="${config.name}",
        symbol="${config.symbol}",
        decimals=${config.decimals},
        addresses={
${addressEntries}
        },
        coingecko_id="${config.coingeckoId}"${l1Decimals},
    ),`;
}).join('\n')}
}

# Hard-coded mapping of token symbols that should be treated as having equivalent
# prices. The right-hand side should map to a token symbol in TOKEN_SYMBOLS_MAP.
TOKEN_EQUIVALENCE_REMAPPING: Final[Dict[str, str]] = {
${Object.entries(tokenEquivalenceRemapping).map(([from, to]) => `    "${from}": "${to}",`).join('\n')}
}
`;

  return code;
}

function generatePythonInit() {
  return `"""Across Protocol constants for Python."""

from .networks import *
from .tokens import *

__version__ = "3.1.76"
__all__ = [
    # Networks
    "TESTNET_SEPOLIA_CHAIN_IDS",
    "TESTNET_CHAIN_IDS", 
    "MAINNET_CHAIN_IDS",
    "CHAIN_IDS",
    "ChainFamily",
    "PRODUCTION_OFT_EIDS",
    "TESTNET_OFT_EIDS",
    "HYPERLANE_DOMAIN_ID_OVERRIDES",
    "CCTP_NO_DOMAIN",
    "OFT_NO_EID", 
    "HYPERLANE_NO_DOMAIN_ID",
    "PublicNetwork",
    "PRODUCTION_NETWORKS",
    "TEST_NETWORKS",
    "PUBLIC_NETWORKS",
    # Tokens
    "TokenConfig",
    "TOKEN_SYMBOLS_MAP",
    "TOKEN_EQUIVALENCE_REMAPPING",
]
`;
}

function generatePythonSetup() {
  return `"""Setup script for across-constants Python package."""

from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="across-constants",
    version="3.1.76",
    author="Across Protocol",
    author_email="hello@umaproject.org",
    description="Export commonly re-used values for Across repositories",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/across-protocol/constants",
    packages=find_packages(),
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU Affero General Public License v3",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
    ],
    python_requires=">=3.8",
    license="AGPL-3.0-only",
)
`;
}

function generatePythonReadme() {
  return `# Across Constants (Python)

Python package containing chain and token constants for the Across Protocol.

## Installation

\`\`\`bash
pip install across-constants
\`\`\`

## Usage

\`\`\`python
from across_constants import CHAIN_IDS, TOKEN_SYMBOLS_MAP, ChainFamily

# Get chain ID for Arbitrum
arbitrum_chain_id = CHAIN_IDS["ARBITRUM"]

# Get USDC token config
usdc_config = TOKEN_SYMBOLS_MAP["USDC"]
print(f"USDC decimals: {usdc_config.decimals}")

# Get USDC address on Arbitrum
usdc_arbitrum_address = usdc_config.addresses[arbitrum_chain_id]
\`\`\`

## Generated Code

This package is automatically generated from JSON data sources. Do not edit the generated files directly.
`;
}

// Create output directory
const outputDir = path.join(__dirname, '../src-generated/python');
const packageDir = path.join(outputDir, 'across_constants');
fs.mkdirSync(packageDir, { recursive: true });

// Generate files
fs.writeFileSync(path.join(packageDir, 'networks.py'), generatePythonNetworks());
fs.writeFileSync(path.join(packageDir, 'tokens.py'), generatePythonTokens());
fs.writeFileSync(path.join(packageDir, '__init__.py'), generatePythonInit());
fs.writeFileSync(path.join(outputDir, 'setup.py'), generatePythonSetup());
fs.writeFileSync(path.join(outputDir, 'README.md'), generatePythonReadme());

console.log('✅ Python files generated successfully');