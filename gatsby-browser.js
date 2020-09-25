exports.onClientEntry = () => {
  // We have to attach the ethers provider to the global window object to work around the fact that
  // ethers doesn't support SSR or SSG
  window.ethersProvider = require("ethers").getDefaultProvider("rinkeby")
}
