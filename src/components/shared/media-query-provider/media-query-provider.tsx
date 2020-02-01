import React, { createContext, useContext, useMemo } from "react"
import useMedia from "use-media"
import { matchMediaStrings } from "@style/variables"

interface ContextProps {
  bottomThumb: boolean
  topThumb: boolean
  bottomPalm: boolean
  topPalm: boolean
  bottomLap: boolean
  topLap: boolean
  bottomDesk: boolean
  topDesk: boolean
  bottomWide: boolean
  topWide: boolean
  bottomWall: boolean
  topWall: boolean
  bottomUltra: boolean
  topUltra: boolean
}

export const MediaQueryContext = createContext<Partial<ContextProps>>({})

const MediaQueryProvider: React.FunctionComponent = ({ children }) => {
  const bottomThumb = useMedia(matchMediaStrings.bottomThumb)
  const topThumb = useMedia(matchMediaStrings.topThumb)
  const bottomPalm = useMedia(matchMediaStrings.bottomPalm)
  const topPalm = useMedia(matchMediaStrings.topPalm)
  const bottomLap = useMedia(matchMediaStrings.bottomLap)
  const topLap = useMedia(matchMediaStrings.topLap)
  const bottomDesk = useMedia(matchMediaStrings.bottomDesk)
  const topDesk = useMedia(matchMediaStrings.topDesk)
  const bottomWide = useMedia(matchMediaStrings.bottomWide)
  const topWide = useMedia(matchMediaStrings.topWide)
  const bottomWall = useMedia(matchMediaStrings.bottomWall)
  const topWall = useMedia(matchMediaStrings.topWall)
  const bottomUltra = useMedia(matchMediaStrings.bottomUltra)
  const topUltra = useMedia(matchMediaStrings.topUltra)

  const value = useMemo(
    () => ({
      bottomThumb,
      topThumb,
      bottomPalm,
      topPalm,
      bottomLap,
      topLap,
      bottomDesk,
      topDesk,
      bottomWide,
      topWide,
      bottomWall,
      topWall,
      bottomUltra,
      topUltra,
    }),
    [
      bottomThumb,
      topThumb,
      bottomPalm,
      topPalm,
      bottomLap,
      topLap,
      bottomDesk,
      topDesk,
      bottomWide,
      topWide,
      bottomWall,
      topWall,
      bottomUltra,
      topUltra,
    ]
  )

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  )
}

export default MediaQueryProvider

export function useMediaQueryContext() {
  return useContext(MediaQueryContext)
}
