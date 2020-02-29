import React, { createContext, useState, useEffect, useContext } from "react"
import Web3 from "web3"

interface ProviderProps {
  useMainnet: boolean
}

type MetaMaskStatus =
  | "AWAITING_LOG_IN"
  | "LOGGED_IN"
  | "ACCESS_DENIED"
  | "NOT_INSTALLED"
  | null

interface MetaMaskState {
  web3: Web3 | null
  metamaskStatus: MetaMaskStatus
}

export const Web3Context = createContext<MetaMaskState>({
  web3: null,
  metamaskStatus: null,
})

export const Web3Provider: React.FunctionComponent<ProviderProps> = ({
  children,
  useMainnet = false,
}) => {
  const [web3State, setWeb3State] = useState<Web3 | null>(null)

  const [status, setStatus] = useState<MetaMaskStatus>("AWAITING_LOG_IN")

  const configureProvider = () => {
    setStatus("LOGGED_IN")

    const provider = new Web3.providers.HttpProvider(
      `https://${
        useMainnet ? "mainnet" : "ropsten"
      }.infura.io/v3/39596d8fbf1d4a2d9dce11f73fc4fed0`
    )

    setWeb3State(new Web3(provider))
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
        setStatus("ACCESS_DENIED")
        setWeb3State(null)
      }
    } else {
      setStatus("NOT_INSTALLED")
      setWeb3State(null)
    }
  }

  useEffect(() => {
    checkMetaMask()
  }, [])

  return (
    <Web3Context.Provider value={{ web3: web3State, metamaskStatus: status }}>
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider

export function useWeb3Context() {
  return useContext(Web3Context)
}
