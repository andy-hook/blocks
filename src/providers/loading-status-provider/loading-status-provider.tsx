import React, { createContext, useContext, useState } from "react"

interface ContextState {
  loading: boolean
  setLoadingStatus: (status: boolean) => void
}

const initialValue = true

export const LoadingStatusContext = createContext<ContextState>({
  loading: initialValue,
  setLoadingStatus: () => initialValue,
})

const LoadingStatusProvider: React.FunctionComponent = ({ children }) => {
  const [loading, setLoading] = useState(initialValue)

  function setLoadingStatus(status: boolean) {
    setLoading(status)
  }

  return (
    <LoadingStatusContext.Provider value={{ loading, setLoadingStatus }}>
      {children}
    </LoadingStatusContext.Provider>
  )
}

export default LoadingStatusProvider

export function useLoadingStatusContext() {
  return useContext(LoadingStatusContext)
}
