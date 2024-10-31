import { Chain, defineChain } from "viem";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  blast,
  blastSepolia,
  boba,
  linea,
  lisk,
  liskSepolia,
  mainnet,
  mode,
  modeTestnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonAmoy,
  redstone,
  scroll,
  scrollSepolia,
  sepolia,
  worldchain,
  zksync,
  zksyncSepoliaTestnet,
  zora,
} from "viem/chains";

type TestnetChainKey = keyof typeof TESTNET_SEPOLIA_CHAINS;
type MainnetChainKey = keyof typeof MAINNET_CHAINS;

// Custom chains
const alephZero = defineChain({
  id: 41_455,
  name: "Aleph Zero",
  nativeCurrency: {
    name: "Aleph Zero",
    symbol: "AZERO",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.alephzero.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "EVM Explorer",
      url: "https://evm-explorer.alephzero.org",
      apiUrl: "https://evm-explorer.alephzero.org/api",
    },
  },
});
const superseed = defineChain({
  id: 5330,
  name: "Superseed",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [""], // TODO
    },
  },
  blockExplorers: {
    default: {
      // TODO
      name: "",
      url: "",
      apiUrl: "",
    },
  },
});

// Chain names and IDs.
export const TESTNET_SEPOLIA_CHAINS = {
  ARBITRUM_SEPOLIA: arbitrumSepolia,
  BASE_SEPOLIA: baseSepolia,
  BLAST_SEPOLIA: blastSepolia,
  LISK_SEPOLIA: liskSepolia,
  MODE_SEPOLIA: modeTestnet,
  OPTIMISM_SEPOLIA: optimismSepolia,
  POLYGON_AMOY: polygonAmoy,
  SCROLL_SEPOLIA: scrollSepolia,
  SEPOLIA: sepolia,
  ZK_SYNC_SEPOLIA: zksyncSepoliaTestnet,
};

export const MAINNET_CHAINS = {
  ALEPH_ZERO: alephZero,
  ARBITRUM: arbitrum,
  BASE: base,
  BLAST: blast,
  BOBA: boba,
  LINEA: linea,
  LISK: lisk,
  MAINNET: mainnet,
  MODE: mode,
  OPTIMISM: optimism,
  POLYGON: polygon,
  REDSTONE: redstone,
  SCROLL: scroll,
  SUPERSEED: superseed,
  WORLD_CHAIN: worldchain,
  ZK_SYNC: zksync,
  ZORA: zora,
};

export const TESTNET_SEPOLIA_CHAIN_IDs = Object.entries(TESTNET_SEPOLIA_CHAINS).reduce(
  (acc, [key, chain]) => {
    acc[key as TestnetChainKey] = chain.id;
    return acc;
  },
  {} as Record<TestnetChainKey, number>,
);

export const TESTNET_CHAIN_IDs = {
  ...TESTNET_SEPOLIA_CHAIN_IDs,
} as const;

export const MAINNET_CHAIN_IDs = Object.entries(MAINNET_CHAINS).reduce(
  (acc, [key, chain]) => {
    acc[key as MainnetChainKey] = chain.id;
    return acc;
  },
  {} as Record<MainnetChainKey, number>,
);
export const CHAIN_IDs = {
  ...MAINNET_CHAIN_IDs,
  ...TESTNET_CHAIN_IDs,
};

export enum ChainFamily {
  OP_STACK,
  ORBIT, // Future: Might need to distinguish between ORBIT_L2 and ORBIT_L3...
}

export const OP_STACK_CHAIN_IDs = [
  CHAIN_IDs.BASE,
  CHAIN_IDs.BASE_SEPOLIA,
  CHAIN_IDs.BLAST,
  CHAIN_IDs.BLAST_SEPOLIA,
  CHAIN_IDs.LISK,
  CHAIN_IDs.LISK_SEPOLIA,
  CHAIN_IDs.MODE,
  CHAIN_IDs.MODE_SEPOLIA,
  CHAIN_IDs.OPTIMISM,
  CHAIN_IDs.OPTIMISM_SEPOLIA,
  CHAIN_IDs.REDSTONE,
  CHAIN_IDs.SUPERSEED,
  CHAIN_IDs.WORLD_CHAIN,
  CHAIN_IDs.ZORA,
];

export const ORBIT_CHAIN_IDs = [CHAIN_IDs.ALEPH_ZERO];

interface PublicNetwork {
  name: string;
  nativeToken: string;
  blockExplorer: string;
  family?: ChainFamily;
}

const { ORBIT, OP_STACK } = ChainFamily;

export const PRODUCTION_NETWORKS = Object.values(MAINNET_CHAINS).reduce(
  (acc, chain) => {
    const publicNetwork = definePublicNetwork(chain);
    acc[chain.id] = publicNetwork;
    return acc;
  },
  {} as Record<number, PublicNetwork>,
);

export const TEST_NETWORKS = Object.values(TESTNET_SEPOLIA_CHAINS).reduce(
  (acc, chain) => {
    const publicNetwork = definePublicNetwork(chain);
    acc[chain.id] = publicNetwork;
    return acc;
  },
  {} as Record<number, PublicNetwork>,
);
export const PUBLIC_NETWORKS = {
  ...PRODUCTION_NETWORKS,
  ...TEST_NETWORKS,
};

function definePublicNetwork(chain: Chain): PublicNetwork {
  const family = OP_STACK_CHAIN_IDs.includes(chain.id)
    ? OP_STACK
    : ORBIT_CHAIN_IDs.includes(chain.id)
    ? ORBIT
    : undefined;
  return {
    name: chain.name,
    nativeToken: chain.nativeCurrency.symbol,
    blockExplorer: chain.blockExplorers?.default.url ?? "",
    family,
  };
}
