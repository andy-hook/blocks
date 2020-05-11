import React from "react"
import GlobalStyle from "@style/global-style"
import Topbar from "@components/shared/topbar/topbar"

import "@style/fonts.css"
import MediaQueryProvider from "@providers/media-query-provider/media-query-provider"
import Web3Provider from "@web3/web3-provider"
import Web3BlocksDataProvider from "@web3/web3-blocks-data-provider"
import LoadingStatusProvider from "@providers/loading-status-provider/loading-status-provider"
import ThemeSwitchProvider from "@providers/theme-switch-provider/theme-switch-provider"
import LoadingIndicator from "@components/shared/loading-indicator/loading-indicator"
import { USE_MAINNET, BLOCK_COUNT } from "../config"

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <MediaQueryProvider>
      <ThemeSwitchProvider>
        <Web3Provider useMainnet={USE_MAINNET}>
          <Web3BlocksDataProvider maxBlocks={BLOCK_COUNT}>
            <LoadingStatusProvider>
              <>
                <GlobalStyle />
                <LoadingIndicator />
                <Topbar />
                {children}
              </>
            </LoadingStatusProvider>
          </Web3BlocksDataProvider>
        </Web3Provider>
      </ThemeSwitchProvider>
    </MediaQueryProvider>
  )
}

export default Layout
