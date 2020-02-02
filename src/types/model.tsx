import { Icons } from "@custom-types/icons"

export interface SocialMetaItem {
  label: string
  url: string
  icon: Icons
}

export interface SocialMeta {
  email: SocialMetaItem
  dribbble: SocialMetaItem
  twitter: SocialMetaItem
  instagram: SocialMetaItem
  linkedin: SocialMetaItem
  github: SocialMetaItem
}

export interface SocialMetaData {
  siteMetadata: {
    social: SocialMeta
  }
}

export interface Meta {
  title: string
  description: string
  author: string
  email: string
  defaultTwitterImage: string
  defaultOgImage: string
  social: SocialMeta
}

export interface MetaData {
  siteMetadata: Meta
}

export interface Web3BlockData {
  difficulty: string
  extraData: string
  gasLimit: number
  gasUsed: number
  hash: string
  logsBloom: string
  miner: string
  mixHash: string
  nonce: string
  number: number
  parentHash: string
  receiptsRoot: string
  sha3Uncles: string
  size: number
  stateRoot: string
  timestamp: number
  totalDifficulty: string
  transactions: string[]
  transactionsRoot: string
}
