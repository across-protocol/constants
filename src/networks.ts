// Chain names and IDs.
export const TESTNET_SEPOLIA_CHAIN_IDs = {
  ARBITRUM_SEPOLIA: 421614,
  BASE_SEPOLIA: 84532,
  BLAST_SEPOLIA: 168587773,
  INK_SEPOLIA: 763373,
  LISK_SEPOLIA: 4202,
  MODE_SEPOLIA: 919,
  OPTIMISM_SEPOLIA: 11155420,
  POLYGON_AMOY: 80002,
  SCROLL_SEPOLIA: 534351,
  SEPOLIA: 11155111,
  ZK_SYNC_SEPOLIA: 300,
};

export const TESTNET_CHAIN_IDs = {
  ...TESTNET_SEPOLIA_CHAIN_IDs,
} as const;

export const MAINNET_CHAIN_IDs = {
  ALEPH_ZERO: 41455,
  ARBITRUM: 42161,
  BASE: 8453,
  BLAST: 81457,
  BOBA: 288,
  INK: 57073,
  LINEA: 59144,
  LISK: 1135,
  MAINNET: 1,
  MODE: 34443,
  OPTIMISM: 10,
  POLYGON: 137,
  REDSTONE: 690,
  SCROLL: 534352,
  SUPERSEED: 5330,
  WORLD_CHAIN: 480,
  ZK_SYNC: 324,
  ZORA: 7777777
};

export const CHAIN_IDs = {
  ...MAINNET_CHAIN_IDs,
  ...TESTNET_CHAIN_IDs,
};

export enum ChainFamily {
  NONE,
  OP_STACK,
  ORBIT, // Future: Might need to distinguish between ORBIT_L2 and ORBIT_L3...
};

interface PublicNetwork {
  name: string;
  family: ChainFamily;
  nativeToken: string;
  publicRPC: string; // RPC provider of last resort.
  blockExplorer: string;
}

const { NONE, OP_STACK, ORBIT } = ChainFamily;
export const PRODUCTION_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.ALEPH_ZERO]: {
    name: "Aleph Zero",
    family: ORBIT,
    nativeToken: "AZERO",
    publicRPC: "https://rpc.alephzero.raas.gelato.cloud",
    blockExplorer: "https://evm-explorer.alephzero.org",
  },
  [CHAIN_IDs.ARBITRUM]: {
    name: "Arbitrum One",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://arb1.arbitrum.io/rpc",
    blockExplorer: "https://arbiscan.io"
  },
  [CHAIN_IDs.BASE]: {
    name: "Base",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://mainnet.base.org",
    blockExplorer: "https://basescan.org"
  },
  [CHAIN_IDs.BLAST]: {
    name: "Blast",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://rpc.blast.io",
    blockExplorer: "https://blastscan.io"
  },
  [CHAIN_IDs.BOBA]: {
    name: "Boba",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://mainnet.boba.network",
    blockExplorer: "https://blockexplorer.boba.network"
  },
  [CHAIN_IDs.INK]: {
    name: "Ink",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://rpc-gel.inkonchain.com",
    blockExplorer: "https://explorer.inkonchain.com"
  },
  [CHAIN_IDs.LINEA]: {
    name: "Linea",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://rpc.linea.build",
    blockExplorer: "https://lineascan.build"
  },
  [CHAIN_IDs.LISK]: {
    name: "Lisk",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://rpc.api.lisk.com",
    blockExplorer: "https://blockscout.lisk.com"
  },
  [CHAIN_IDs.MAINNET]: {
    name: "Mainnet",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://eth.llamarpc.com",
    blockExplorer: "https://etherscan.io"
  },
  [CHAIN_IDs.MODE]: {
    name: "Mode",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://mainnet.mode.network",
    blockExplorer: "https://explorer.mode.network"
  },
  [CHAIN_IDs.OPTIMISM]: {
    name: "Optimism",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://mainnet.optimism.io",
    blockExplorer: "https://optimistic.etherscan.io"
  },
  [CHAIN_IDs.POLYGON]: {
    name: "Polygon",
    family: NONE,
    nativeToken: "MATIC",
    publicRPC: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com"
  },
  [CHAIN_IDs.REDSTONE]: {
    name: "Redstone",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://rpc.redstonechain.com ",
    blockExplorer: "https://explorer.redstone.xyz",
  },
  [CHAIN_IDs.SCROLL]: {
    name: "Scroll",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://rpc.scroll.io",
    blockExplorer: "https://scrollscan.com"
  },
  [CHAIN_IDs.SUPERSEED]: {
    name: "Superseed",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://mainnet.superseed.xyz",
    blockExplorer: "" // @todo: To be added later
  },
  [CHAIN_IDs.WORLD_CHAIN]: {
    name: "World Chain",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://worldchain-mainnet.g.alchemy.com/public",
    blockExplorer: "https://worldchain-mainnet-explorer.alchemy.com",
  },
  [CHAIN_IDs.ZK_SYNC]: {
    name: "zkSync",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://mainnet.era.zksync.io",
    blockExplorer: "https://era.zksync.network"
  },
  [CHAIN_IDs.ZORA]: {
    name: "Zora",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://rpc.zora.energy",
    blockExplorer: "https://zorascan.xyz",
  }
};

export const TEST_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.ARBITRUM_SEPOLIA]: {
    name: "Arbitrum Sepolia",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://sepolia-rollup.arbitrum.io/rpc",
    blockExplorer: "https://sepolia.arbiscan.io"
  },
  [CHAIN_IDs.BASE_SEPOLIA]: {
    name: "Base Sepolia",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://sepolia.base.org",
    blockExplorer: "https://sepolia.basescan.org"
  },
  [CHAIN_IDs.BLAST_SEPOLIA]: {
    name: "Blast Sepolia",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://sepolia.blast.io",
    blockExplorer: "https://sepolia.blastscan.io"
  },
  [CHAIN_IDs.LISK_SEPOLIA]: {
    name: "Lisk Sepolia",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://rpc.sepolia-api.lisk.com",
    blockExplorer: "https://sepolia-blockscout.lisk.com"
  },
  [CHAIN_IDs.MODE_SEPOLIA]: {
    name: "Mode Sepolia",
    family: OP_STACK,
    nativeToken: "ETH",
    publicRPC: "https://sepolia.mode.network",
    blockExplorer: "https://sepolia.explorer.mode.network"
  },
  [CHAIN_IDs.OPTIMISM_SEPOLIA]: {
    name: "Optimism Sepolia",
    family: OP_STACK,
    nativeToken: "ETH",
    "rpc": "https://sepolia.optimism.io",
    blockExplorer: "https://sepolia-optimism.etherscan.io"
  },
  [CHAIN_IDs.POLYGON_AMOY]: {
    name: "Polygon Amoy",
    family: NONE,
    nativeToken: "MATIC",
    publicRPC: "https://rpc-amoy.polygon.technology",
    blockExplorer: "https://amoy.polygonscan.com"
  },
  [CHAIN_IDs.SCROLL_SEPOLIA]: {
    name: "Scroll Sepolia",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://sepolia-rpc.scroll.io",
    blockExplorer: "https://sepolia.scrollscan.com"
  },
  [CHAIN_IDs.SEPOLIA]: {
    name: "Sepolia",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://sepolia.drpc.org",
    blockExplorer: "https://sepolia.etherscan.io"
  },
  [CHAIN_IDs.ZK_SYNC_SEPOLIA]: {
    name: "zkSync Sepolia",
    family: NONE,
    nativeToken: "ETH",
    publicRPC: "https://sepolia.era.zksync.dev",
    blockExplorer: "https://sepolia-era.zksync.network"
  }
};

export const PUBLIC_NETWORKS = {
  ...PRODUCTION_NETWORKS,
  ...TEST_NETWORKS,
};
