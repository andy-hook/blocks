import { GatsbyLinkProps } from "gatsby-link"

export type TransitionType =
  | "enter"
  | "exit"
  | "firstEnter"
  | "menuEnter"
  | "menuExit"
  | "pop"
  | "nextProjectExit"
  | "nextProjectEnter"

export type TransitionStatus =
  | "entering"
  | "entered"
  | "exiting"
  | "exited"
  | "POP"

interface TransitionLinkProps {
  delay?: number
  length?: number
  state?: {
    animType: TransitionType
  }
}

interface TransitionStateProps {
  delay: number
  length: number
  state: {
    animType?: TransitionType
  }
}

export interface TransitionState {
  transitionStatus: TransitionStatus
  current: TransitionStateProps
  entry: TransitionStateProps
  exit: TransitionStateProps
  mount: boolean
}

export interface TransitionLink<State> extends GatsbyLinkProps<State> {
  entry?: TransitionLinkProps
  exit?: TransitionLinkProps
}
