// @ts-nocheck
import React, { createContext, useState, useEffect, useContext } from "react"

/* tslint:disable: no-var-requires */
// There are problems with the types provided by web3
// Using a typical import fails to build production because of type errors
const Web3Require = require("web3")

interface StateProps {
  web3: any // Package types are broken :'(
  error?: "DENIED" | "FORBIDDEN"
  loading: boolean
}

export const Web3Context = createContext<Partial<StateProps>>({})

export const Web3Provider: React.FunctionComponent = ({ children }) => {
  const [web3State, setState] = useState<StateProps>({
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

    async function checkMetaMask() {
      if (window.ethereum) {
        // Happy path
        window.ethereum.autoRefreshOnNetworkChange = false

        try {
          console.log("awaiting log in")
          await window.ethereum.enable()

          console.log("logged in")
          // Let's go
          configureProvider()
        } catch {
          console.log("not logged in")
          // There was an error while enabling
          setState({ web3: null, error: "DENIED", loading: false })
        }

        // Legacy dapp browsers...
      } else if (window.web3) {
        configureProvider()
      } else {
        setState({ web3: null, error: "FORBIDDEN", loading: false })
      }
    }

    checkMetaMask()
  }, [])

  return (
    <Web3Context.Provider value={web3State}>{children}</Web3Context.Provider>
  )
}

export default Web3Provider

export function useWeb3Context() {
  return useContext(Web3Context)
}
