import { Icons } from "@components/icon/icon"

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
