import React, { createContext, useContext, useEffect } from "react"
import { useWeb3Context } from "./web3-provider"
import { getDefaultProvider } from "ethers"

export const DataContext = createContext({})

const DataProvider: React.FunctionComponent = ({ children }) => {
  const web3 = useWeb3Context().web3

  const provider = getDefaultProvider("rinkeby")

  useEffect(() => {
    async function getData() {
      const hello = await provider.getBlockWithTransactions(40000)

      console.log(hello)
    }

    void getData()
  }, [web3, provider])

  return <DataContext.Provider value="hello">{children}</DataContext.Provider>
}

function useDataContext() {
  return useContext(DataContext)
}

export { DataProvider, useDataContext }
