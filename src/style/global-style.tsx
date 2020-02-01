import React from "react"
import { Normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import { zIndex, darkGrey } from "@style/variables"

const Global = createGlobalStyle`

  /* A very simple reset that sits on top of Normalize
  ------------------------------------------------- */

  body {
    overflow-y: scroll;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  button {
    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
  }


  /* Page level styling
  /* (e.g. HTML and BODY elements)
  ------------------------------------------------- */

  /* 1. Improve anti-aliasing consistency between platforms */
  /* 2. Sensible default box-sizing */

  html {
    font-size: 100%;
  }
  
  body,
  button {
    -webkit-font-smoothing: antialiased; /* [1] */
    -moz-osx-font-smoothing: grayscale; /* [1] */
    text-rendering: optimizeLegibility; /* [1] */
    box-sizing: border-box; /* [2] */
  }

  /* [2] */
  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }


  /* Button
  ------------------------------------------------- */
  button {
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
  }


  /* Images
  ------------------------------------------------- */

  /* 1. Fluid images for responsive purposes. */
  /* 2. Offset "alt" text from surrounding copy. */
  /* 3. Setting "vertical-align" removes the whitespace that appears under "img"
        elements when they are dropped into a page as-is. Safer alternative to
        using "display: block;". */
  
  img {
    max-width: 100%; /* [1] */
    font-style: italic; /* [2] */
    vertical-align: middle; /* [3] */
  }

  /* 1. If a "width" and/or "height" attribute have been explicitly defined, let’s
     not make the image fluid. */

  img[width], /* [1] */
  img[height] {  /* [1] */
    max-width: none;
  }
`

const GlobalPageBackground = createGlobalStyle`
  body {
    background-color: ${darkGrey(100)}
  }
`

const GlobalTransitionLink = createGlobalStyle`

  /* transition-portal doesn't give any granular control over the z-index level so it's overwritten here */
  /* position: fixed is also set on the portal which messes up the width of the wrapped page */
  .gatsby-plugin-transition-link-portal {
    width: 100%;
    z-index: ${zIndex.low} !important;
  }

  .tl-wrapper {
    z-index: ${zIndex.low} !important;
  }

  .tl-edges {
    overflow: hidden !important;
  }

  /* using transition-portal messes with the styling and pages dissappear due to a negative margin being set on the element */
  .tl-wrapper + .tl-wrapper {
    margin: 0 !important;
  }

  /* Entering page should always sit above the exiting */
  /* This is primarily used to prevent jank when click to go to the next project at the bottm of a page */
  .tl-wrapper-status--entering,
  .tl-wrapper-status--entered {
    z-index: ${zIndex.low + 1} !important;
  }

  .tl-wrapper-status--exiting {
    z-index: ${zIndex.low} !important;
  }
`

/* Images
  ------------------------------------------------- */

const GlobalStyle: React.FunctionComponent = () => {
  return (
    <>
      <Normalize />
      <Global />
      <GlobalPageBackground />
      <GlobalTransitionLink />
    </>
  )
}

export default GlobalStyle
