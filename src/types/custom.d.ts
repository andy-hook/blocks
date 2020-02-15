// Typescript, why can't you see my svgs?
declare module "*.svg" {
  const content: any
  export default content
}

// gatsby-plugin-transition-link doesn't currently have type declarations
// https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/14
declare module "gatsby-plugin-transition-link" {
  import React from "react"
  import {
    TransitionLink,
    TransitionState,
  } from "@custom-types/gatsby-plugin-transition-link"

  export const TransitionState: TransitionState
  export const TransitionPortal: any

  export default class Link<State> extends React.Component<
    TransitionLink<State>,
    any
  > {}
}

declare module "gatsby-plugin-transition-link/hooks" {
  import { TransitionState } from "@custom-types/gatsby-plugin-transition-link"

  export const useTransitionState: () => TransitionState
}

// "react-truncate-string" doesn't currently have type declarations
declare module "react-truncate-string" {
  const TruncateString: any
  export default TruncateString
}
