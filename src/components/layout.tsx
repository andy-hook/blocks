import React, { memo } from "react"
import GlobalStyle from "@style/global-style"
import LoaderContainer from "@components/shared/loader/loader.container"
import TopbarContainer from "@components/shared/topbar/topbar.container"
import MenuContainer from "@components/shared/menu/menu.container"

import "@style/fonts.css"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import MediaQueryProvider from "@components/shared/media-query-provider/media-query-provider"
import { Store } from "@custom-types/store"
import { connect } from "react-redux"

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
          <>
            <GlobalStyle />

            <LoaderContainer />
            <TopbarContainer />
            <MenuContainer />
            {children}
          </>
        </ThemeProvider>
      </MediaQueryProvider>
    )
  }
)

const ConnectedLayout = connect(mapStateToProps)(Layout)

export default ConnectedLayout
