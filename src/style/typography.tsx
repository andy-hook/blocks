import { css } from "styled-components"
import {
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  typeScale,
  textShadow,
} from "@style/variables"
import { themeText, isTheme } from "@style/theme"
import { scaleBetween, scaleGreaterThan } from "./media-queries"
import { createTextCrop } from "./utils"

/* Base text cropping
  ------------------------------------------------- */
export const setBaseCropAndLineHeight = (lHeight: number) => {
  return createTextCrop({
    lHeight,
    topCrop: 10,
    bottomCrop: 15,
  })
}

/* Display text cropping
  ------------------------------------------------- */
export const setDisplayCropAndLineHeight = (lHeight: number) => {
  return createTextCrop({
    lHeight,
    topCrop: 4,
    bottomCrop: 19,
  })
}

/* Re-composibles
  ------------------------------------------------- */
export const typeBase = css`
  font-family: ${fontFamily.base};
`

export const typeBaseRegular = css`
  ${typeBase}
  font-weight: ${fontWeight.base.regular};
  letter-spacing: ${letterSpacing.base.regular};
`

export const typeBaseMedium = css`
  ${typeBase}
  font-weight: ${fontWeight.base.medium};
  letter-spacing: ${letterSpacing.base.medium};
`

export const typeBaseSemibold = css`
  ${typeBase}
  font-weight: ${fontWeight.base.semibold};
  letter-spacing: ${letterSpacing.base.semibold};
`

// Display
export const typeDisplay = css`
  font-family: ${fontFamily.display};
`

export const typeDisplayBold = css`
  ${typeDisplay}
  font-weight: ${fontWeight.display.bold};
  letter-spacing: ${letterSpacing.display.bold};
`

// Button
export const typeDisplayButton = css`
  font-family: ${fontFamily.display};
  font-weight: ${fontWeight.display.bold};
  letter-spacing: ${letterSpacing.display.button};
`

/* Composites
  ------------------------------------------------- */
export const typeTitle = css`
  ${setDisplayCropAndLineHeight(lineHeight.display.tight)}
  ${typeDisplayBold}

  color: ${themeText(200)};

  ${isTheme(
    "dark",
    css`
      text-shadow: ${textShadow.heavy};
    `
  )};
`

export const typeSupTitle = css`
  ${setBaseCropAndLineHeight(lineHeight.display.tight)}
  ${typeBaseMedium}

  color: ${themeText(900)};
`

export const typeBody = css`
  ${setBaseCropAndLineHeight(lineHeight.base.regular)}
  ${typeBaseRegular}

  color: ${themeText(800)};
`

export const typeBodySubtle = css`
  ${setBaseCropAndLineHeight(lineHeight.base.regular)}
  ${typeBaseRegular}

  color: ${themeText(900)};
`

/* Base type sizes
  ------------------------------------------------- */
export const typeSizeBaseXs = css`
  font-size: ${typeScale[1]};

  ${scaleBetween(
    "font-size",
    typeScale[1],
    typeScale[4],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[4], "topUltra")}
`

export const typeSizeBaseSm = css`
  font-size: ${typeScale[3]};

  ${scaleBetween(
    "font-size",
    typeScale[3],
    typeScale[5],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[5], "topUltra")}
`

export const typeSizeBaseMd = css`
  font-size: ${typeScale[5]};

  ${scaleBetween(
    "font-size",
    typeScale[5],
    typeScale[6],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[6], "topUltra")}
`

export const typeSizeBaseLg = css`
  font-size: ${typeScale[4]};
  
  ${scaleBetween(
    "font-size",
    typeScale[4],
    typeScale[6],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[6],
    typeScale[7],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[7], "topUltra")}
`

/* Display type sizes
  ------------------------------------------------- */
export const typeSizeDisplayXs = css``

export const typeSizeDisplaySm = css``

export const typeSizeDisplayMd = css`
  font-size: ${typeScale[7]};
  
  ${scaleBetween(
    "font-size",
    typeScale[7],
    typeScale[9],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[9],
    typeScale[10],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[10], "topUltra")}
`

export const typeSizeDisplayLg = css`
  font-size: ${typeScale[8]};
  
  ${scaleBetween(
    "font-size",
    typeScale[8],
    typeScale[10],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[10],
    typeScale[11],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[11], "topUltra")}
`

export const typeSizeDisplayXl = css`
  font-size: ${typeScale[9]};

  ${scaleBetween(
    "font-size",
    typeScale[9],
    typeScale[11],
    "bottomThumb",
    "bottomDesk"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[11],
    typeScale[12],
    "topDesk",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[12], "topUltra")}
`
