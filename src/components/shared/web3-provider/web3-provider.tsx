// @ts-nocheck
import React, { createContext, useState, useEffect, useContext } from "react"

/* tslint:disable: no-var-requires */
// There are problems with the types provided by web3
// Using a typical import fails to build production because of type errors
const Web3Require = require("web3")

interface Props {
  web3: any // Types are broken :'(
  error?: "DENIED" | "FORBIDDEN"
  loading: boolean
}

export const Web3Context = createContext<Partial<Props>>({})

export const Web3Provider: React.FunctionComponent = ({ children }) => {
  const [web3State, setState] = useState<Props>({
    web3: null,
    loading: true,
  })

  useEffect(() => {
    const configureProvider = () => {
      const provider = new Web3Require.providers.HttpProvider(
        "https://ropsten.infura.io/v3/39596d8fbf1d4a2d9dce11f73fc4fed0"
      )

      setState({ web3: new Web3Require(provider), loading: false })
    }

    // Happy path
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false

      try {
        window.ethereum.enable()

        // Let's go
        configureProvider()
      } catch {
        // There was an error while enabling
        setState({ web3: null, error: "DENIED", loading: false })
      }

      // Legacy dapp browsers...
    } else if (window.web3) {
      configureProvider()
    } else {
      setState({ web3: null, error: "FORBIDDEN", loading: false })
    }
  }, [])

  return (
    <Web3Context.Provider value={web3State}>{children}</Web3Context.Provider>
  )
}

export default Web3Provider

export function useWeb3Context() {
  return useContext(Web3Context)
}
