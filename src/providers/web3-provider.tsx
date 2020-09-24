import React, { createContext, useState, useEffect, useContext } from "react"
import Web3 from "web3"

interface StateProps {
  web3: Web3 | null
  error?: "DENIED" | "FORBIDDEN"
}

export const Web3Context = createContext<Partial<StateProps>>({})

export const Web3Provider: React.FunctionComponent = ({ children }) => {
  const [web3State, setWeb3State] = useState<StateProps>({
    web3: null,
  })

  useEffect(() => {
    let cancelled = false

    async function checkMetaMask() {
      // @ts-ignore
      if (window.ethereum) {
        // Happy path
        // @ts-ignore
        // eslint-disable-next-line
        window.ethereum.autoRefreshOnNetworkChange = false

        try {
          // Awaiting log in
          // @ts-ignore
          // eslint-disable-next-line
          await window.ethereum.enable()

          // Logged in
          const provider = new Web3.providers.HttpProvider(
            `https://mainnet.infura.io/v3/39596d8fbf1d4a2d9dce11f73fc4fed0`
          )

          if (!cancelled) {
            setWeb3State({ web3: new Web3(provider) })
          }
        } catch {
          // Not logged in
          // There was an error while enabling
          if (!cancelled) {
            setWeb3State({ web3: null, error: "DENIED" })
          }
        }
      } else {
        if (!cancelled) {
          setWeb3State({ web3: null, error: "FORBIDDEN" })
        }
      }
    }

    void checkMetaMask()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <Web3Context.Provider value={web3State}>{children}</Web3Context.Provider>
  )
}

export default Web3Provider

export function useWeb3Context(): Partial<StateProps> {
  return useContext(Web3Context)
}
