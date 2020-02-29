import React, { createContext, useContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { themes, ThemeName } from "@style/theme"

interface ContextState {
  themeType: ThemeName
  setThemeTypeStatus: (type: ThemeName) => void
}

const initialValue: ThemeName = "dark"

export const ThemeSwitchContext = createContext<ContextState>({
  themeType: initialValue,
  setThemeTypeStatus: () => null,
})

const ThemeSwitchProvider: React.FunctionComponent = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeName>(initialValue)

  function setThemeTypeStatus(type: ThemeName) {
    setThemeType(type)
  }

  return (
    <ThemeSwitchContext.Provider value={{ themeType, setThemeTypeStatus }}>
      <ThemeProvider theme={themes[themeType]}>
        <>{children}</>
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  )
}

export default ThemeSwitchProvider

export function useThemeSwitchContext() {
  return useContext(ThemeSwitchContext)
}
