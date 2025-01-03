import { CHAIN_IDs } from "./networks";

// Information for the supported tokens on each chain.
// NOTE: All addresses should be checksummed
export const TOKEN_SYMBOLS_MAP = {
  ACX: {
    name: "Across Protocol Token",
    symbol: "ACX",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0x53691596d1BCe8CEa565b84d4915e69e03d9C99d",
      [CHAIN_IDs.BOBA]: "0x96821b258955587069F680729cD77369C0892B40",
      [CHAIN_IDs.MAINNET]: "0x44108f0223A3C3028F5Fe7AEC7f9bb2E66beF82F",
      [CHAIN_IDs.OPTIMISM]: "0xFf733b2A3557a7ed6697007ab5D11B79FdD1b76B",
      [CHAIN_IDs.POLYGON]: "0xF328b73B6c685831F238c30a23Fc19140CB4D8FC",
      [CHAIN_IDs.SEPOLIA]: "0x49fCaC04AE71dbD074304Fb12071bD771e0E927A",
    },
    coingeckoId: "across-protocol",
  },
  ARB: {
    name: "Arbitrum",
    symbol: "ARB",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      [CHAIN_IDs.MAINNET]: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
    },
    coingeckoId: "arbitrum",
  },
  AZERO: {
    name: "Aleph Zero",
    symbol: "AZERO",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ALEPH_ZERO]: "0xb7Da55D7040ef9C887e20374D76A88F93A59119E",
      [CHAIN_IDs.MAINNET]: "0xdD0ae774F7E300CdAA4EA371cD55169665Ee6AFe",
    },
    coingeckoId: "aleph-zero",
  },
  BAL: {
    name: "Balancer",
    symbol: "BAL",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
      [CHAIN_IDs.BASE]: "0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1",
      [CHAIN_IDs.LINEA]: "0x660edb0A46c3f69be9eFF5446318593b9469F9e2",
      [CHAIN_IDs.MAINNET]: "0xba100000625a3754423978a60c9317c58a424e3D",
      [CHAIN_IDs.OPTIMISM]: "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
      [CHAIN_IDs.POLYGON]: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
    },
    coingeckoId: "balancer",
  },
  BADGER: {
    name: "Badger",
    symbol: "BADGER",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E",
      [CHAIN_IDs.MAINNET]: "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
      [CHAIN_IDs.POLYGON]: "0x1FcbE5937B0cc2adf69772D228fA4205aCF4D9b2",
    },
    coingeckoId: "badger-dao",
  },
  BOBA: {
    name: "Boba",
    symbol: "BOBA",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.BOBA]: "0xa18bF3994C0Cc6E3b63ac420308E5383f53120D7",
      [CHAIN_IDs.MAINNET]: "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc",
    },
    coingeckoId: "boba-network",
  },
  DAI: {
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      [CHAIN_IDs.BASE]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      [CHAIN_IDs.BOBA]: "0xf74195Bb8a5cf652411867c5C2C5b8C2a402be35",
      [CHAIN_IDs.LINEA]: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
      [CHAIN_IDs.MAINNET]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      [CHAIN_IDs.OPTIMISM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      [CHAIN_IDs.POLYGON]: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      [CHAIN_IDs.ZK_SYNC]: "0x4B9eb6c0b6ea15176BBF62841C6B2A8a398cb656",
    },
    coingeckoId: "dai",
  },
  ETH: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ALEPH_ZERO]: "0xB3f0eE446723f4258862D949B4c9688e7e7d35d3",
      [CHAIN_IDs.ARBITRUM]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      [CHAIN_IDs.ARBITRUM_SEPOLIA]: "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73",
      [CHAIN_IDs.BASE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BOBA]: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
      [CHAIN_IDs.BLAST]: "0x4300000000000000000000000000000000000004",
      [CHAIN_IDs.BLAST_SEPOLIA]: "0x4200000000000000000000000000000000000023",
      [CHAIN_IDs.INK]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.INK_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.LINEA]: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      [CHAIN_IDs.LENS_SEPOLIA]: "0xaA91D645D7a6C1aeaa5988e0547267B77d33fe16",
      [CHAIN_IDs.LISK]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.LISK_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      [CHAIN_IDs.MODE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.MODE_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.POLYGON]: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      [CHAIN_IDs.POLYGON_AMOY]: "0x52eF3d68BaB452a294342DC3e5f464d7f610f72E",
      [CHAIN_IDs.REDSTONE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.SCROLL]: "0x5300000000000000000000000000000000000004",
      [CHAIN_IDs.SCROLL_SEPOLIA]: "0x5300000000000000000000000000000000000004",
      [CHAIN_IDs.SEPOLIA]: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      [CHAIN_IDs.WORLD_CHAIN]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.ZK_SYNC]: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
      [CHAIN_IDs.ZK_SYNC_SEPOLIA]: "0x2D6Db36B3117802E996f13073A08A685D3FeF7eD",
      [CHAIN_IDs.ZORA]: "0x4200000000000000000000000000000000000006",
    },
    coingeckoId: "ethereum",
  },
  GHO: {
    name: "Gho Token",
    symbol: "GHO",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM_SEPOLIA]: "0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x7CFa3f3d1cded0Da930881c609D4Dbf0012c14Bb",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810",
      [CHAIN_IDs.MAINNET]: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
      [CHAIN_IDs.SEPOLIA]: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    },
    coingeckoId: "gho",
  },
  GRASS: {
    name: "Grass",
    symbol: "GRASS",
    decimals: 18,
    addresses: {
      // [CHAIN_IDs.LENS]: @todo
      [CHAIN_IDs.LENS_SEPOLIA]: "0xeee5a340Cdc9c179Db25dea45AcfD5FE8d4d3eB8",
      // [CHAIN_IDs.MAINNET]: @todo
      [CHAIN_IDs.SEPOLIA]: "0x8D725d9dBBb5E0667efeDC833D6A9e8C6cA02C68",
    },
    coingeckoId: "", // @todo
  },
  LSK: {
    name: "Lisk",
    symbol: "LSK",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.LISK]: "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
      [CHAIN_IDs.MAINNET]: "0x6033F7f88332B8db6ad452B7C6D5bB643990aE3f",
    },
    coingeckoId: "lisk",
  },
  MATIC: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      [CHAIN_IDs.POLYGON_AMOY]: "0x360ad4f9a9A8EFe9A8DCB5f461c4Cc1047E1Dcf9",
      [CHAIN_IDs.SEPOLIA]: "0x3fd0A53F4Bf853985a95F4Eb3F9C9FDE1F8e2b53",
    },
    coingeckoId: "matic-network",
  },
  OP: {
    name: "Optimism",
    symbol: "OP",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.OPTIMISM]: "0x4200000000000000000000000000000000000042",
    },
    coingeckoId: "optimism",
  },
  POOL: {
    name: "PoolTogether",
    symbol: "POOL",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0xCF934E2402A5e072928a39a956964eb8F2B5B79C",
      [CHAIN_IDs.BASE]: "0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3",
      [CHAIN_IDs.MAINNET]: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
      [CHAIN_IDs.OPTIMISM]: "0x395Ae52bB17aef68C2888d941736A71dC6d4e125",
      [CHAIN_IDs.POLYGON]: "0x25788a1a171ec66Da6502f9975a15B609fF54CF6",
      [CHAIN_IDs.SCROLL]: "0xF9Af83FC41e0cc2af2fba93644D542Df6eA0F2b7",
      [CHAIN_IDs.WORLD_CHAIN]: "0x7077C71B4AF70737a08287E279B717Dcf64fdC57",
    },
    coingeckoId: "pooltogether",
  },
  SNX: {
    name: "Synthetix",
    symbol: "SNX",
    decimals: 18,
    // Based on https://github.com/Synthetixio/synthetix-docs/blob/fe83d0757977b1cb7f69796126e71a66295bf264/content/addresses.md
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
      [CHAIN_IDs.OPTIMISM]: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
    },
    coingeckoId: "havven",
  },
  UMA: {
    name: "UMA Voting Token",
    symbol: "UMA",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0xd693Ec944A85eeca4247eC1c3b130DCa9B0C3b22",
      [CHAIN_IDs.BOBA]: "0x780f33Ad21314d9A1Ffb6867Fe53d48a76Ec0D16",
      [CHAIN_IDs.MAINNET]: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
      [CHAIN_IDs.OPTIMISM]: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
      [CHAIN_IDs.POLYGON]: "0x3066818837c5e6eD6601bd5a91B0762877A6B731",
    },
    coingeckoId: "uma",
  },
  USDB: {
    name: "USDB",
    symbol: "USDB",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.BLAST]: "0x4300000000000000000000000000000000000003",
      [CHAIN_IDs.MAINNET]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    },
    coingeckoId: "usdb",
  },
  USDC: {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      [CHAIN_IDs.ARBITRUM_SEPOLIA]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
      [CHAIN_IDs.BASE]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      [CHAIN_IDs.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      [CHAIN_IDs.OPTIMISM]: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
      [CHAIN_IDs.POLYGON]: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      [CHAIN_IDs.POLYGON_AMOY]: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
      [CHAIN_IDs.SCROLL]: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
      [CHAIN_IDs.SEPOLIA]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    },
    coingeckoId: "usd-coin",
  },
  "USDC.e": {
    name: "USD Coin (bridged)",
    symbol: "USDC.e",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.ALEPH_ZERO]: "0x18d25B4e18165c97e1285212e5d1f80eDD6d3Aa7",
      [CHAIN_IDs.ARBITRUM]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      [CHAIN_IDs.BOBA]: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
      [CHAIN_IDs.LINEA]: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
      [CHAIN_IDs.LISK]: "0xF242275d3a6527d877f2c927a82D9b057609cc71",
      [CHAIN_IDs.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      [CHAIN_IDs.MODE]: "0xd988097fb8612cc24eeC14542bC03424c656005f",
      [CHAIN_IDs.OPTIMISM]: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0x9552a0a6624A23B848060AE5901659CDDa1f83f8",
      [CHAIN_IDs.POLYGON]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      [CHAIN_IDs.WORLD_CHAIN]: "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1",
      [CHAIN_IDs.ZK_SYNC]: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    },
    coingeckoId: "usd-coin-ethereum-bridged",
  },
  USDbC: {
    name: "USD Coin (bridged)",
    symbol: "USDbC",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.BASE]: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
      [CHAIN_IDs.BASE_SEPOLIA]: "0xE634Ec56B73779eCFfa78109a653FA0aE33D243f",
      [CHAIN_IDs.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    },
    coingeckoId: "bridged-usd-coin-base",
  },
  USDzC: {
    name: "USD Coin (bridged)",
    symbol: "USDzC",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      [CHAIN_IDs.ZORA]: "0xCccCCccc7021b32EBb4e8C08314bD62F7c653EC4",
    },
    coingeckoId: "usd-coin-ethereum-bridged",
  },
  USDT: {
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    addresses: {
      [CHAIN_IDs.ALEPH_ZERO]: "0xD648529D4803d3467bA8850577BEd4e4b8Ae583C",
      [CHAIN_IDs.ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      [CHAIN_IDs.BOBA]: "0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d",
      [CHAIN_IDs.LINEA]: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
      [CHAIN_IDs.LISK]: "0x05D032ac25d322df992303dCa074EE7392C117b9",
      [CHAIN_IDs.MAINNET]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      [CHAIN_IDs.MODE]: "0xf0F161fDA2712DB8b566946122a5af183995e2eD",
      [CHAIN_IDs.OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      [CHAIN_IDs.POLYGON]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      [CHAIN_IDs.SCROLL]: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
      [CHAIN_IDs.SEPOLIA]: "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06",
      [CHAIN_IDs.ZK_SYNC]: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
    },
    coingeckoId: "tether",
  },
  WAZERO: {
    name: "Wrapped AZERO",
    symbol: "WAZERO",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ALEPH_ZERO]: "0xb7Da55D7040ef9C887e20374D76A88F93A59119E",
      [CHAIN_IDs.MAINNET]: "0xdD0ae774F7E300CdAA4EA371cD55169665Ee6AFe",
    },
    coingeckoId: "aleph-zero",
  },
  WBTC: {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    addresses: {
      [CHAIN_IDs.ARBITRUM]: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      [CHAIN_IDs.BOBA]: "0xdc0486f8bf31DF57a952bcd3c1d3e166e3d9eC8b",
      [CHAIN_IDs.BLAST]: "0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692",
      [CHAIN_IDs.LINEA]: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
      [CHAIN_IDs.LISK]: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3",
      [CHAIN_IDs.MAINNET]: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      [CHAIN_IDs.MODE]: "0xcDd475325D6F564d27247D1DddBb0DAc6fA0a5CF",
      [CHAIN_IDs.OPTIMISM]: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      [CHAIN_IDs.POLYGON]: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      [CHAIN_IDs.WORLD_CHAIN]: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3",
      [CHAIN_IDs.SCROLL]: "0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1",
      [CHAIN_IDs.ZK_SYNC]: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
    },
    coingeckoId: "wrapped-bitcoin",
  },
  WETH: {
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.ALEPH_ZERO]: "0xB3f0eE446723f4258862D949B4c9688e7e7d35d3",
      [CHAIN_IDs.ARBITRUM]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      [CHAIN_IDs.ARBITRUM_SEPOLIA]: "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73",
      [CHAIN_IDs.BASE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BASE_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.BOBA]: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
      [CHAIN_IDs.BLAST]: "0x4300000000000000000000000000000000000004",
      [CHAIN_IDs.BLAST_SEPOLIA]: "0x4200000000000000000000000000000000000023",
      [CHAIN_IDs.INK]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.INK_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.LENS_SEPOLIA]: "0xaA91D645D7a6C1aeaa5988e0547267B77d33fe16",
      [CHAIN_IDs.LINEA]: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
      [CHAIN_IDs.LISK]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.LISK_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      [CHAIN_IDs.MODE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.MODE_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.OPTIMISM_SEPOLIA]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.POLYGON]: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      [CHAIN_IDs.POLYGON_AMOY]: "0x52eF3d68BaB452a294342DC3e5f464d7f610f72E",
      [CHAIN_IDs.REDSTONE]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.SCROLL]: "0x5300000000000000000000000000000000000004",
      [CHAIN_IDs.SCROLL_SEPOLIA]: "0x5300000000000000000000000000000000000004",
      [CHAIN_IDs.SEPOLIA]: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      [CHAIN_IDs.WORLD_CHAIN]: "0x4200000000000000000000000000000000000006",
      [CHAIN_IDs.ZK_SYNC]: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
      [CHAIN_IDs.ZK_SYNC_SEPOLIA]: "0x2D6Db36B3117802E996f13073A08A685D3FeF7eD",
      [CHAIN_IDs.ZORA]: "0x4200000000000000000000000000000000000006",
    },
    coingeckoId: "weth",
  },
  WMATIC: {
    name: "Matic",
    symbol: "WMATIC",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.MAINNET]: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      [CHAIN_IDs.POLYGON]: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      [CHAIN_IDs.POLYGON_AMOY]: "0x360ad4f9a9A8EFe9A8DCB5f461c4Cc1047E1Dcf9",
      [CHAIN_IDs.SEPOLIA]: "0x3fd0A53F4Bf853985a95F4Eb3F9C9FDE1F8e2b53",
    },
    coingeckoId: "wmatic",
  },
};

// Hard-coded mapping of token symbols that should be treated as having equivalent
// prices. The right-hand side should map to a token symbol in TOKEN_SYMBOLS_MAP.
export const TOKEN_EQUIVALENCE_REMAPPING: { [symbol: string]: string } = {
  [TOKEN_SYMBOLS_MAP["USDC.e"].symbol]: TOKEN_SYMBOLS_MAP["USDC"].symbol,
  [TOKEN_SYMBOLS_MAP["USDbC"].symbol]: TOKEN_SYMBOLS_MAP["USDC"].symbol,
  [TOKEN_SYMBOLS_MAP["USDzC"].symbol]: TOKEN_SYMBOLS_MAP["USDC"].symbol,
  [TOKEN_SYMBOLS_MAP["USDB"].symbol]: TOKEN_SYMBOLS_MAP["DAI"].symbol,
};
