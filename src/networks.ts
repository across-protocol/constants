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

export const PUBLIC_NETWORKS: { [chainId: number]: PublicNetwork } = {
  1: { name: "Mainnet",  nativeToken: "ETH", blockExplorer: "https://etherscan.io" },
  3: { name: "Ropsten", nativeToken: "ETH", blockExplorer: "https://ropsten.etherscan.io" },
  4: { name: "Rinkeby", nativeToken: "ETH",  blockExplorer: "https://rinkeby.etherscan.io" },
  5: { name: "Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.ethercan.io" },
  10: { name: "Optimism", nativeToken: "ETH", blockExplorer: "https://optimistic.ethercan.io" },
  42: { name: "Kovan", nativeToken: "ETH", blockExplorer: "https://kovan.etherscan.io" },
  69: { name: "Optimism Kovan", nativeToken: "ETH", blockExplorer: "https://kovan-optimistic.ethercan.io" },
  100: { name: "Gnosis", nativeToken: "XDAI", blockExplorer: "https://blockscout.comxdai/mainnet" },
  137: { name: "Polygon",  nativeToken: "MATIC", blockExplorer: "https://polygonscan.com" },
  280: { name: "zkSync Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.explorer.zksync.io" },
  288: { name: "Boba", nativeToken: "ETH", blockExplorer: "https://blockexplorer.boba.network" },
  300: { name: "zkSync Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.explorer.zksync.io" },
  324: { name: "zksync", nativeToken: "ETH", blockExplorer: "https://explorer.zksync.io" },
  80001: { name: "Polygon Mumbai", nativeToken: "MATIC", blockExplorer: "https://mumbai.polygonscan.com" },
  42161: { name: "Arbitrum One", nativeToken: "ETH", blockExplorer: "https://arbiscan.io" },
  43114: { name: "Avalanche", nativeToken: "AVAX", blockExplorer: "https://snowtrace.io" },
  8453: { name: "Base", nativeToken: "ETH", blockExplorer: "https://basescan.org" },
  84531: { name: "Base Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.basescan.org" },
  84532: { name: "Base Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.basescan.org" },
  421611: { name: "Arbitrum Rinkeby", nativeToken: "ETH", blockExplorer: "https://testnet.arbiscan.io" },
  421613: { name: "Arbitrum Goerli", nativeToken: "ETH", blockExplorer: "https://goerli.arbiscan.io" },
  421614: { name: "Arbitrum Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.arbiscan.io" },
  11155111: { name: "Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia.ethercan.io" },
  11155420: { name: "Optimism Sepolia", nativeToken: "ETH", blockExplorer: "https://sepolia-optimism.etherscan.io" },
  168587773: { name: "Blast Sepolia", nativeToken: "ETH", blockExplorer: "https://testnet.blastscan.io" },
};
