import React, { memo } from "react"
import GlobalStyle from "@style/global-style"
import LoaderContainer from "@components/shared/loader/loader.container"
import TopbarContainer from "@components/shared/topbar/topbar.container"
import MenuContainer from "@components/shared/menu/menu.container"

import "@style/fonts.css"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import MediaQueryProvider from "@components/shared/media-query-provider/media-query-provider"
import * as S from "./layout.style"

const Layout: React.FunctionComponent = memo(({ children }) => {
  return (
    <MediaQueryProvider>
      <GlobalStyle />
      <ThemeProvider theme={themes.dark}>
        <S.SiteWrapper>
          <LoaderContainer />
          <TopbarContainer />
          <MenuContainer />
          {children}
          <S.SiteTexture />
        </S.SiteWrapper>
      </ThemeProvider>
    </MediaQueryProvider>
  )
})

export default Layout
