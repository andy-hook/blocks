import { css } from "styled-components"
import { scaleBetween, scaleGreaterThan } from "./media-queries"
import { createTextCrop, createPlaceholderCrop } from "./utils"
import { type } from "./design-tokens"

/* Base text cropping
  ------------------------------------------------- */
const baseCropSettings = {
  topCrop: 6,
  bottomCrop: 11,
}

export const setBaseCropAndLineHeight = (lHeight: number) => {
  return createTextCrop({
    ...baseCropSettings,
    lHeight,
  })
}

export const setBasePlaceholderCrop = (lHeight: number) => {
  return createPlaceholderCrop({
    ...baseCropSettings,
    lHeight,
  })
}

/* Display text cropping
  ------------------------------------------------- */
const displayCropSettings = {
  topCrop: 6,
  bottomCrop: 11,
}

export const setDisplayCropAndLineHeight = (lHeight: number) => {
  return createTextCrop({
    ...displayCropSettings,
    lHeight,
  })
}

export const setDisplayPlaceholderCrop = (lHeight: number) => {
  return createPlaceholderCrop({
    ...displayCropSettings,
    lHeight,
  })
}

/* Recomposibles
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
    type.scale[11],
    "topDesk",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[11], "topUltra")}
`
