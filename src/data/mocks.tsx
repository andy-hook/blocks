import { SocialMeta } from "@custom-types/model"
import { FluidObject } from "gatsby-image"
import {
  BlockWithTransactions,
  TransactionResponse,
} from "@ethersproject/abstract-provider"
import { bigNum } from "@utils"

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

export const transactionResponse: TransactionResponse = {
  hash: "0x8ec4f28158c135d6778017e9a58d86ac7f44aa3032b64a758090d87d36440771",
  blockHash:
    "0xe22f0199ec0468e35cc0c1b5dbddeca6adb921745c862aa292119f82784fb4be",
  blockNumber: 10945648,
  confirmations: 13,
  from: "0x6b74f7cdD50104E435Dc82E2d27f88C0c0A06541",
  gasPrice: bigNum(100),
  gasLimit: bigNum(100),
  to: "0x090D4613473dEE047c3f2706764f49E0821D256e",
  value: bigNum(100),
  nonce: 9,
  data:
    "0x2e7ba6ef000000000000000000000000000000000000000000000000000000000001a8a40000000000000000000000006b74f7cdd50104e435dc82e2d27f88c0c0a06541000000000000000000000000000000000000000000000015af1d78b58c40000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000012953b10ff83860d6c52d03914a01e1c4340e6f114f29bef9ed950fa74c452e59e9154ddfda9996609acf65c4c2cba371473b7f4da8719937dc75e0bfeeef46dbf12637979712a6d211e77761b479c85cb904afa86e2e10abb96e44be7e3156ad003548983df980e008fbebd42fa028f676b2162f8aacdc5d1d09572e77b6b251fc2ad2e7a7123f76538fd2f682c65669509a87763be78f1941daa85b09f52940631726c2a874ffd0f49c2f2d3d88e56d48ed76b268776d766f3938d76e9614ddc3a8afc489587f9d645048dfd2af9d870e979d4852de520be9585bd30b6e43c78ca811e84a3b2469deedf9166c1af6a82af160e3eb93037ab40a0828d1a986e0cfd4a32e9f423de6209028fd750e17a583bde2c97cf2969341f23159d53745ff202d5a6bbf63a232eb537c3f533302e420342d82d44e58489e87381e610e5325dad316242f3dcf9b44aab943fb66767d80a23edf6816cf45455bc6b0bd7528eda4481f6387bd89f8ef966481f5e4aabbb4a22e4818a73b103ae8c39eacd341e87dda98205eda6f17270b86802f0988f561e6f6995cecaaf8a09acc6b3c01f3773dabf4213cb8eee2e43b10c468c0a6c9cd17cb730af130ce80ecd6b079a9d63550bc92e81c1bf1a1d2d851c5acd2dd1d51ff6e308d7d6fe01222c9c8f4ab885dff8289956c37c63820ac0e16243f542006665a6fe9f794d07b4f5e397939648ae26ecbdae89fc55ef1d8ef396bfd7ed36d54fc821c8f283fdbb5dcebec5f739dfdeab88d76ca5389f96456da4fb9f1b2d7a54cb9ed14aab85dadcd9ab1d8e9cba",
  r: "0x7326bd4a10cd8d0c129db63eb4daf5b3d3fe9b0db56b1ebf68c1cb895d3b3717",
  s: "0x1f44c176341ba135cc0ac7a4044dc9f0ac328457807a00daa971b367ca0c037d",
  v: 37,
  chainId: 1,
  wait: async () => {
    return new Promise(() => "")
  },
}

export const blockWithTransactions: BlockWithTransactions = {
  hash: "0xe22f0199ec0468e35cc0c1b5dbddeca6adb921745c862aa292119f82784fb4be",
  parentHash:
    "0xa6c7de86448755e3c78d9b08f32252e96abcffad1fbd86dff1abb5ce5f7a9336",
  number: 10945648,
  timestamp: 1601223663,
  nonce: "0x29f9c3f00085b010",
  difficulty: 3276124105072224,
  gasLimit: bigNum(100),
  gasUsed: bigNum(100),
  miner: "0x4C549990A7eF3FEA8784406c1EECc98bF4211fA5",
  extraData: "0x73757065726e6f64652d6465",
  transactions: [transactionResponse, transactionResponse],
}

export const blockData = [blockWithTransactions, blockWithTransactions]
export const transactions = [transactionResponse, transactionResponse]
