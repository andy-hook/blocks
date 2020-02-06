import { css } from "styled-components"
import { themeText, isTheme } from "@style/theme"
import { scaleBetween, scaleGreaterThan } from "./media-queries"
import { createTextCrop } from "./utils"
import { type, appearance } from "./design-tokens"

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
  font-family: ${type.fontFamily.base};
`

export const typeBaseRegular = css`
  ${typeBase}
  font-weight: ${type.fontWeight.base.regular};
  letter-spacing: ${type.letterSpacing.base.regular};
`

export const typeBaseMedium = css`
  ${typeBase}
  font-weight: ${type.fontWeight.base.medium};
  letter-spacing: ${type.letterSpacing.base.medium};
`

export const typeBaseSemibold = css`
  ${typeBase}
  font-weight: ${type.fontWeight.base.semibold};
  letter-spacing: ${type.letterSpacing.base.semibold};
`

// Display
export const typeDisplay = css`
  font-family: ${type.fontFamily.display};
`

export const typeDisplayBold = css`
  ${typeDisplay}
  font-weight: ${type.fontWeight.display.bold};
  letter-spacing: ${type.letterSpacing.display.bold};
`

// Button
export const typeDisplayButton = css`
  font-family: ${type.fontFamily.display};
  font-weight: ${type.fontWeight.display.bold};
  letter-spacing: ${type.letterSpacing.display.button};
`

/* Composites
  ------------------------------------------------- */
export const typeTitle = css`
  ${setDisplayCropAndLineHeight(type.lineHeight.display.tight)}
  ${typeDisplayBold}

  color: ${themeText(200)};

  ${isTheme(
    "dark",
    css`
      text-shadow: ${appearance.textShadow.heavy};
    `
  )};
`

export const typeSupTitle = css`
  ${setBaseCropAndLineHeight(type.lineHeight.display.tight)}
  ${typeBaseMedium}

  color: ${themeText(900)};
`

export const typeBody = css`
  ${setBaseCropAndLineHeight(type.lineHeight.base.regular)}
  ${typeBaseRegular}

  color: ${themeText(800)};
`

export const typeBodySubtle = css`
  ${setBaseCropAndLineHeight(type.lineHeight.base.regular)}
  ${typeBaseRegular}

  color: ${themeText(900)};
`

/* Base type sizes
  ------------------------------------------------- */
export const typeSizeBaseXs = css`
  font-size: ${type.scale[1]};

  ${scaleBetween(
    "font-size",
    type.scale[1],
    type.scale[4],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[4], "topUltra")}
`

export const typeSizeBaseSm = css`
  font-size: ${type.scale[3]};

  ${scaleBetween(
    "font-size",
    type.scale[3],
    type.scale[5],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[5], "topUltra")}
`

export const typeSizeBaseMd = css`
  font-size: ${type.scale[5]};

  ${scaleBetween(
    "font-size",
    type.scale[5],
    type.scale[6],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[6], "topUltra")}
`

export const typeSizeBaseLg = css`
  font-size: ${type.scale[4]};
  
  ${scaleBetween(
    "font-size",
    type.scale[4],
    type.scale[6],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    type.scale[6],
    type.scale[7],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[7], "topUltra")}
`

/* Display type sizes
  ------------------------------------------------- */
export const typeSizeDisplayXs = css``

export const typeSizeDisplaySm = css``

export const typeSizeDisplayMd = css`
  font-size: ${type.scale[7]};
  
  ${scaleBetween(
    "font-size",
    type.scale[7],
    type.scale[9],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    type.scale[9],
    type.scale[10],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[10], "topUltra")}
`

export const typeSizeDisplayLg = css`
  font-size: ${type.scale[8]};
  
  ${scaleBetween(
    "font-size",
    type.scale[8],
    type.scale[10],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    type.scale[10],
    type.scale[11],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[11], "topUltra")}
`

export const typeSizeDisplayXl = css`
  font-size: ${type.scale[9]};

  ${scaleBetween(
    "font-size",
    type.scale[9],
    type.scale[11],
    "bottomThumb",
    "bottomDesk"
  )}

  ${scaleBetween(
    "font-size",
    type.scale[11],
    type.scale[12],
    "topDesk",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[12], "topUltra")}
`
