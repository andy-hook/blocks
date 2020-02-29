import React, { createContext, useState, useEffect, useContext } from "react"
import Web3 from "web3"

interface ProviderProps {
  useMainnet: boolean
}

interface StateProps {
  web3: Web3 | null
  error?: "DENIED" | "FORBIDDEN"
}

export const Web3Context = createContext<Partial<StateProps>>({})

export const Web3Provider: React.FunctionComponent<ProviderProps> = ({
  children,
  useMainnet = false,
}) => {
  const [web3State, setWeb3State] = useState<StateProps>({
    web3: null,
  })

  useEffect(() => {
    const configureProvider = () => {
      const provider = new Web3.providers.HttpProvider(
        `https://${
          useMainnet ? "mainnet" : "ropsten"
        }.infura.io/v3/39596d8fbf1d4a2d9dce11f73fc4fed0`
      )

      setWeb3State({ web3: new Web3(provider) })
    }

    async function checkMetaMask() {
      // @ts-ignore
      if (window.ethereum) {
        // Happy path
        // @ts-ignore
        window.ethereum.autoRefreshOnNetworkChange = false

        try {
          // Awaiting log in
          // @ts-ignore
          await window.ethereum.enable()

          // Logged in
          configureProvider()
        } catch {
          // Not logged in
          // There was an error while enabling
          setWeb3State({ web3: null, error: "DENIED" })
        }

        // Legacy dapp browsers...
        // @ts-ignore
      } else if (window.web3) {
        configureProvider()
      } else {
        setWeb3State({ web3: null, error: "FORBIDDEN" })
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
