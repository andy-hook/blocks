import React from "react"
import GlobalStyle from "@style/global-style"
import Topbar from "@components/topbar/topbar"

import "@style/fonts.css"
import MediaQueryProvider from "@providers/media-query-provider"
import Web3Provider from "@providers/web3-provider"
import Web3BlocksDataProvider from "@providers/web3-blocks-data-provider"
import LoadingStatusProvider from "@providers/loading-status-provider"
import ThemeSwitchProvider from "@providers/theme-switch-provider"
import { BlockDataProvider } from "@providers/block-data-provider"
import LoadingIndicator from "@components/loading-indicator/loading-indicator"
import { BLOCK_COUNT } from "../config"

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <BlockDataProvider maxBlocks={BLOCK_COUNT}>
      <MediaQueryProvider>
        <ThemeSwitchProvider>
          <Web3Provider>
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
    </BlockDataProvider>
  )
}

export default Layout
