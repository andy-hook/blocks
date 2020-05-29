import React, { createContext, useContext, useState, useCallback } from "react"

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

  const setLoadingStatus = useCallback(
    (status: boolean) => {
      setLoading(status)
    },
    [setLoading]
  )

  return (
    <LoadingStatusContext.Provider value={{ loading, setLoadingStatus }}>
      {children}
    </LoadingStatusContext.Provider>
  )
}

export default LoadingStatusProvider

export function useLoadingStatusContext(): ContextState {
  return useContext(LoadingStatusContext)
}
