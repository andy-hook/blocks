import {
  SocialMeta,
  Web3BlockData,
  Web3TransactionData,
} from "@custom-types/model"
import { FluidObject } from "gatsby-image"

export const mockSocialIcons: SocialMeta = {
  email: {
    label: "Email",
    url: "email address",
    icon: "mail",
  },
  twitter: {
    label: "Twitter",
    url: "path/to/social/profile",
    icon: "twitter",
  },
  instagram: {
    label: "Instagram",
    url: "path/to/social/profile",
    icon: "instagram",
  },
  linkedin: {
    label: "Linkedin",
    url: "path/to/social/profile",
    icon: "linkedin",
  },
  dribbble: {
    label: "Dribbble",
    url: "path/to/social/profile",
    icon: "dribbble",
  },
  github: {
    label: "Github",
    url: "path/to/social/profile",
    icon: "github",
  },
}

export const mockFluidImageObject: FluidObject = {
  aspectRatio: 1.5,
  sizes: "(max-width: 1000px) 100vw, 1000px",
  src: "/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
  srcSet:
    "/static/4a7de89fcee5d7cd97c940895602fbe0/4d406/cover-image.jpg 250w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/32ee9/cover-image.jpg 500w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
}

export const mockWeb3BlockTransactions = [
  "0x65ade0ba8d28232deb5c0d4e167ad3ef8b56d7df9804f5d0bd2fad3716cfa5d5",
  "0x552cd083ccbf552b5cab0c256cd7ca66a4c525ff577eb95ccdd028cb70763a8a",
  "0xe23d03e496e94d4d47ac784c124e160407e2feaab067d9513c3b7090e994bfea",
  "0x861a844471ecd29197e57790a71443d49a07b5ce984f88168c2d7595599298e4",
  "0xcdc9594c9a0a1f98f8f1d3eb832a8c7bd91c55e62c6fe83fb86e8eccc240e9a7",
  "0xbe43c6aa6158d5525c07202db32bdd48207080bbde190953affc2368116a69ae",
  "0xae63dd79e2a581d18e90610064f6225d13f176370cf2b36cbe38bb0a948cd03f",
  "0xe504b0b8b80aaf5d3c70ce4eebad2696bc738e0243cb5f2ff7042a996c2e558a",
  "0x8a18dd689446a973eef9b4e9a37f9968f7bfeedf8afaa84832f021569602f9aa",
  "0x641d7ba735edcc5788eb55242f31dd8d5fe6d6dafea97837433f5441aab17f27",
  "0x170ebb0cb88cfec753ed864988fb7900f7a1b2683908a384b12fabca8e2afdf7",
  "0xf1245c1220ce1a478cb3c43f7a52c4ee394d8d80962c1ba7b2124613253b5702",
  "0x5ba52d055f1806bb60f4c9f9b931689870c037067087592c609ad14437d25ecb",
  "0x643be2aefb96691bd4158dabba9f11d5480648ff99e031b2a33bd943f3a60b72",
  "0x7ccd0309cd318adf61570f8a4f1508ca3bed6de1be7f93a58d3044f459f4c465",
  "0xd0a5fb6a6350c6a94379010dc89aa60330539a92f4b34ddee2cb46922e6e2508",
  "0xc5340d951a05a768b8f4dc08d533e8a4039841f80ee9efdf78ada947e9410b18",
  "0x33fb7e395a1a3b3520a1d3f30b308fc00990e0e0eb2908fd12b43182cf0638f2",
  "0x1d9168316397038f706f3a87e3701e9c6837fc3bf672ed5201b6c257f9b59683",
  "0xbc164a9936be0188ce2acc2ad4c72cd2faaa377ee2d0031d6f579bb4e0063582",
]

export const mockWeb3TransactionData: Web3TransactionData = {
  blockHash:
    "0xf4efc352a708b14e5345698886c3b8a3711e29417b599dc7948a6baa5b86a39f",
  blockNumber: 7250676,
  from: "0xcf5f58c3E7d863c3c859C6Cbce03e015262df0e5",
  gas: 100000,
  gasPrice: "2000000000",
  hash: "0x414a1b09ff2a1cafb2ddd13ed1cc229948ee349b7accd4ad3c3b250e46cddb8d",
  input: "0x",
  nonce: 8939,
  r: "0xe049499f710167dcd3c3228b056784b0148abae5bf10a3afee893343edbb210c",
  s: "0xbb03bb3cca747a8ea86bbd532d0414f14f63b9aac5ee77cfabeedc12f14522e",
  to: "0xF39d8b9B8C130ac08d4A32E50bb7bbD41C054EB9",
  transactionIndex: 0,
  v: "0x29",
  value: "1",
  fee: "0.000042",
  ether: 0.000000000000000001,
}

export const mockMultipleWeb3TransactionData: Web3TransactionData[] = [
  { ...mockWeb3TransactionData },
  { ...mockWeb3TransactionData },
]

export const mockWeb3BlockData: Web3BlockData = {
  difficulty: "1527190616",
  extraData: "0xde8302050d8f5061726974792d457468657265756d86312e33382e30826c69",
  gasLimit: 8000029,
  gasUsed: 478117,
  hash: "0x4db4976ebf9fe4469ae7cb06a659cb3df9b99e12a9cc693007497315a3c241d4",
  logsBloom:
    "0x00000000000000000000000000000400000048000000000000000000000000000000000000000000000000000000000800000000000000080000100040000000000000000000000000000008000100000000000000000000000000000000000000000000000001000000000000000000000010000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000040000000000000000000000000000000000000000000202000000000100000000000000000000000000000008000000000001000000100000000000000000000400000000000000000000000000000000000000",
  miner: "0x635B4764D1939DfAcD3a8014726159abC277BecC",
  mixHash: "0x71829f85e56c4e1ae49fd6426b88ba324fd6b0dfb38386ac95dc0020912bce49",
  nonce: "0x2b7af333ade72e06",
  number: 7250672,
  parentHash:
    "0x98f1249c3cab1ef4721d608a90a1e65dd52f5079fd23c9952e5e240b06275b40",
  receiptsRoot:
    "0x78a32350b4f3e677c51207dd4745d2b8fc9d83db7c2462e80c6f037e515b1664",
  sha3Uncles:
    "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 2900,
  stateRoot:
    "0x617f3601567977b484b06e3c170fa0d404e182597650abebf1f5f9e3318ae60a",
  timestamp: 1580675996,
  totalDifficulty: "29935082490937795",
  transactions: mockWeb3BlockTransactions,
  transactionsRoot:
    "0x88c10aed5d4d8615d01e8bd73f20e142d71874992d4af917196412380fe19801",
  uncles: [],
  transactionsData: mockMultipleWeb3TransactionData,
  transactionCount: 34,
}

export const mockMultipleWeb3BlockData: Web3BlockData[] = [
  { ...mockWeb3BlockData },
  { ...mockWeb3BlockData },
]
