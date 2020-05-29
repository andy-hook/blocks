import React, { ReactNode, Component } from "react"
import { ThemeProvider } from "styled-components"
import { shallow, mount, ShallowWrapper, ReactWrapper } from "enzyme"
import { themes, ThemeName } from "@style/theme"
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

type emptyObj = Record<string, unknown>

export const mountWithTheme = (
  theme: ThemeName,
  children: ReactNode
): ReactWrapper<any, Readonly<emptyObj>, Component<emptyObj, emptyObj, any>> =>
  mount(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )

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

export const shallowWithTheme = (
  theme: ThemeName,
  children: ReactNode
): ShallowWrapper<any, emptyObj, Component<emptyObj, emptyObj, any>> =>
  shallow(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )
