exports.onClientEntry = () => {
  const ethers = require("ethers")

  const provider = ethers.getDefaultProvider("homestead", {
    etherscan: process.env.GATSBY_ETHERSCAN_API_KEY,
    infura: process.env.GATSBY_INFURA_PROJECT_ID,
    alchemy: process.env.GATSBY_ALCHEMY_API_KEY,
  })

  // We have to attach the ethers provider to the global window object to work around the fact that
  // ethers doesn't support SSR or SSG
  window.ethersProvider = provider
}
