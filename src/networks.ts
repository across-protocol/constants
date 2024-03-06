// Chain names and ID's
export const CHAIN_IDs = {
  MAINNET: 1,
  OPTIMISM: 10,
  POLYGON: 137,
  BOBA: 288,
  ZK_SYNC: 324,
  BASE: 8453,
  ARBITRUM: 42161,
  GOERLI: 5,
  OPTIMISM_GOERLI: 420,
  ZK_SYNC_GOERLI: 280,
  MUMBAI: 80001,
  BASE_GOERLI: 84531,
  ARBITRUM_GOERLI: 421613,
  SEPOLIA: 11155111,
  OPTIMISM_SEPOLIA: 11155420,
  ZK_SYNC_SEPOLIA: 300,
  POLYGON_AMOY: 80002,
  BASE_SEPOLIA: 84532,
  ARBITRUM_SEPOLIA: 421614,
};

interface PublicNetwork {
  name: string;
  nativeToken: string;
  blockExplorer: string;
}

export const PRODUCTION_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.ARBITRUM]: { name: "Arbitrum One", nativeToken: "ETH", blockExplorer: "https://arbiscan.io" },
  [CHAIN_IDs.BASE]: { name: "Base", nativeToken: "ETH", blockExplorer: "https://basescan.org" },
  [CHAIN_IDs.BOBA]: { name: "Boba", nativeToken: "ETH", blockExplorer: "https://blockexplorer.boba.network" },
  [CHAIN_IDs.MAINNET]: { name: "Mainnet",  nativeToken: "ETH", blockExplorer: "https://etherscan.io" },
  [CHAIN_IDs.OPTIMISM]: { name: "Optimism", nativeToken: "ETH", blockExplorer: "https://optimistic.ethercan.io" },
  [CHAIN_IDs.POLYGON]: { name: "Polygon",  nativeToken: "MATIC", blockExplorer: "https://polygonscan.com" },
  [CHAIN_IDs.ZK_SYNC]: { name: "zksync", nativeToken: "ETH", blockExplorer: "https://explorer.zksync.io" },
};

export const TEST_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.ARBITRUM_GOERLI]: { name: "Arbitrum Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.arbiscan.io" },
  [CHAIN_IDs.ARBITRUM_SEPOLIA]: { name: "Arbitrum Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.arbiscan.io" },
  [CHAIN_IDs.BASE_GOERLI]: { name: "Base Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.basescan.org" },
  [CHAIN_IDs.BASE_SEPOLIA]: { name: "Base Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.basescan.org" },
  [CHAIN_IDs.BASE_GOERLI]: { name: "Arbitrum Rinkeby", nativeToken: "ETH", blockExplorer: "https://testnet.arbiscan.io" },
  [CHAIN_IDs.GOERLI]: { name: "Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.ethercan.io" },
  [CHAIN_IDs.MUMBAI]: { name: "Polygon Mumbai", nativeToken: "MATIC", blockExplorer: "https://mumbai.polygonscan.com" },
  [CHAIN_IDs.OPTIMISM_SEPOLIA]: { name: "Optimism Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia-optimism.etherscan.io" },
  [CHAIN_IDs.SEPOLIA]: { name: "Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.ethercan.io" },
  [CHAIN_IDs.ZK_SYNC_GOERLI]: { name: "zkSync Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.explorer.zksync.io" },
  [CHAIN_IDs.ZK_SYNC_SEPOLIA]: { name: "zkSync Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.explorer.zksync.io" },
};

export const PUBLIC_NETWORKS = {
  ...PRODUCTION_NETWORKS,
  ...TEST_NETWORKS,
};
