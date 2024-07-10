// Chain names and IDs.
export const TESTNET_SEPOLIA_CHAIN_IDs = {
  ZK_SYNC_SEPOLIA: 300,
  MODE_SEPOLIA: 919,
  LISK_SEPOLIA: 4202,
  POLYGON_AMOY: 80002,
  BASE_SEPOLIA: 84532,
  ARBITRUM_SEPOLIA: 421614,
  SCROLL_SEPOLIA: 534351,
  SEPOLIA: 11155111,
  OPTIMISM_SEPOLIA: 11155420,
  BLAST_SEPOLIA: 168587773,
};

export const TESTNET_CHAIN_IDs = {
  ...TESTNET_SEPOLIA_CHAIN_IDs,
} as const;

export const MAINNET_CHAIN_IDs = {
  MAINNET: 1,
  OPTIMISM: 10,
  POLYGON: 137,
  BOBA: 288,
  ZK_SYNC: 324,
  LISK: 1135,
  BASE: 8453,
  MODE: 34443,
  ARBITRUM: 42161,
  LINEA: 59144,
  BLAST: 81457,
  SCROLL: 534352
};

export const CHAIN_IDs = {
  ...MAINNET_CHAIN_IDs,
  ...TESTNET_CHAIN_IDs,
};

interface PublicNetwork {
  name: string;
  nativeToken: string;
  blockExplorer: string;
}

export const PRODUCTION_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.ARBITRUM]: { name: "Arbitrum One", nativeToken: "ETH", blockExplorer: "https://arbiscan.io" },
  [CHAIN_IDs.BASE]: { name: "Base", nativeToken: "ETH", blockExplorer: "https://basescan.org" },
  [CHAIN_IDs.BLAST]: { name: "Blast", nativeToken: "ETH", blockExplorer: "https://blastscan.io" },
  [CHAIN_IDs.BOBA]: { name: "Boba", nativeToken: "ETH", blockExplorer: "https://blockexplorer.boba.network" },
  [CHAIN_IDs.LINEA]: { name: "Linea", nativeToken: "ETH", blockExplorer: "https://lineascan.build" },
  [CHAIN_IDs.LISK]: { name: "Lisk", nativeToken: "ETH", blockExplorer: "https://blockscout.lisk.com" },
  [CHAIN_IDs.MAINNET]: { name: "Mainnet",  nativeToken: "ETH", blockExplorer: "https://etherscan.io" },
  [CHAIN_IDs.MODE]: { name: "Mode", nativeToken: "ETH", blockExplorer: "https://explorer.mode.network" },
  [CHAIN_IDs.OPTIMISM]: { name: "Optimism", nativeToken: "ETH", blockExplorer: "https://optimistic.etherscan.io" },
  [CHAIN_IDs.POLYGON]: { name: "Polygon",  nativeToken: "MATIC", blockExplorer: "https://polygonscan.com" },
  [CHAIN_IDs.SCROLL]: { name: "Scroll", nativeToken: "ETH", blockExplorer: "https://scrollscan.com" },
  [CHAIN_IDs.ZK_SYNC]: { name: "zkSync", nativeToken: "ETH", blockExplorer: "https://era.zksync.network" }
};

export const TEST_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.ARBITRUM_SEPOLIA]: { name: "Arbitrum Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.arbiscan.io" },
  [CHAIN_IDs.BASE_SEPOLIA]: { name: "Base Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.basescan.org" },
  [CHAIN_IDs.BLAST_SEPOLIA]: { name: "Blast Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.blastscan.io" },
  [CHAIN_IDs.LISK_SEPOLIA]: { name: "Lisk Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia-blockscout.lisk.com" },
  [CHAIN_IDs.MODE_SEPOLIA]: { name: "Mode Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.explorer.mode.network" },
  [CHAIN_IDs.OPTIMISM_SEPOLIA]: { name: "Optimism Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia-optimism.etherscan.io" },
  [CHAIN_IDs.POLYGON_AMOY]: { name: "Polygon Amoy", nativeToken: "MATIC", blockExplorer: "https://amoy.polygonscan.com" },
  [CHAIN_IDs.SCROLL_SEPOLIA]: { name: "Scroll Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.scrollscan.com" },
  [CHAIN_IDs.SEPOLIA]: { name: "Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.etherscan.io" },
  [CHAIN_IDs.ZK_SYNC_SEPOLIA]: { name: "zkSync Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia-era.zksync.network" }
};

export const PUBLIC_NETWORKS = {
  ...PRODUCTION_NETWORKS,
  ...TEST_NETWORKS,
};
