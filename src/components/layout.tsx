import React, { memo } from "react"
import GlobalStyle from "@style/global-style"
import LoaderContainer from "@components/shared/loader/loader.container"
import TopbarContainer from "@components/shared/topbar/topbar.container"
import MenuContainer from "@components/shared/menu/menu.container"

import "@style/fonts.css"
import { themes } from "@style/theme"
import { Store } from "@custom-types/store"
import MediaQueryProvider from "@providers/media-query-provider/media-query-provider"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import Web3Provider from "@web3/web3-provider"
import Web3BlocksDataProvider from "@web3/web3-blocks-data-provider"
import { BLOCK_COUNT, USE_MAINNET } from "@utils"
import LoadingStatusProvider from "@providers/loading-status-provider/loading-status-provider"

interface DispatchProps {
  switchToLightTheme: () => void
  lightThemeEnabled: Store["lightThemeEnabled"]
}

type ContainerProps = DispatchProps

const mapStateToProps = ({ lightThemeEnabled }: Store) => {
  return { lightThemeEnabled }
}

const Layout: React.FunctionComponent<ContainerProps> = memo(
  ({ children, lightThemeEnabled }) => {
    return (
      <MediaQueryProvider>
        <ThemeProvider theme={lightThemeEnabled ? themes.light : themes.dark}>
          <Web3Provider useMainnet={USE_MAINNET}>
            <Web3BlocksDataProvider maxBlocks={BLOCK_COUNT}>
              <LoadingStatusProvider>
                <>
                  <GlobalStyle />
                  <LoaderContainer />
                  <TopbarContainer />
                  <MenuContainer />
                  {children}
                </>
              </LoadingStatusProvider>
            </Web3BlocksDataProvider>
          </Web3Provider>
        </ThemeProvider>
      </MediaQueryProvider>
    )
  }
)

const ConnectedLayout = connect(mapStateToProps)(Layout)

export default ConnectedLayout
