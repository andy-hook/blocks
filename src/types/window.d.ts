import { Provider } from "@ethersproject/abstract-provider"

declare global {
  interface Window {
    ethersProvider: Provider
  }
}

export {}
