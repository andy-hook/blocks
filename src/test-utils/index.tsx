import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { shallow, mount } from "enzyme"
import { themes } from "@style/theme"
import { ThemeName } from "@custom-types/theme"
import renderer from "react-test-renderer"

export const mountWithTheme = (theme: ThemeName, children: ReactNode) =>
  mount(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )

export const renderWithTheme = (theme: ThemeName, children: ReactNode) =>
  renderer
    .create(
      <ThemeProvider theme={themes[theme]}>
        <>{children}</>
      </ThemeProvider>
    )
    .toJSON()

export const shallowWithTheme = (theme: ThemeName, children: ReactNode) =>
  shallow(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )
