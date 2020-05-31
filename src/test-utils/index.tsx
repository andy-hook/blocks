import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { themes, ThemeName } from "@style/theme"
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

export const renderWithTheme = (
  theme: ThemeName,
  children: ReactNode
): ReactTestRendererJSON | null =>
  renderer
    .create(
      <ThemeProvider theme={themes[theme]}>
        <>{children}</>
      </ThemeProvider>
    )
    .toJSON()
