import { css } from "styled-components"
import { createTextCrop, createPlaceholderCrop } from "./utils"
import { type } from "./design-tokens"
import { mq } from "./media-queries"

/* Base text cropping
  ------------------------------------------------- */
const baseCropSettings = {
  topCrop: 11,
  bottomCrop: 15,
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
  topCrop: 4,
  bottomCrop: 22,
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
export const typeSizeBaseSm = css`
  font-size: ${type.scale[1]};
`

export const typeSizeBaseMd = css`
  font-size: ${type.scale[2]};
`

export const typeSizeBaseLg = css`
  font-size: ${type.scale[2]};

  ${mq.greaterThan("topLap")`
    font-size: ${type.scale[3]};
  `}
`

/* Display type sizes
  ------------------------------------------------- */
export const typeSizeDisplayXs = css`
  font-size: ${type.scale[4]};
`

export const typeSizeDisplaySm = css`
  font-size: ${type.scale[4]};

  ${mq.greaterThan("topLap")`
    font-size: ${type.scale[6]};
  `}
`
export const typeSizeDisplayMd = css`
  font-size: ${type.scale[8]};

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[9]};
  `}
`

export const typeSizeDisplayLg = css`
  font-size: ${type.scale[8]};

  ${mq.greaterThan("topLap")`
    font-size: ${type.scale[9]};
  `}

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[10]};
  `}
`
