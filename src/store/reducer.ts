import { combineReducers } from "redux"
import {
  Store,
  LoaderVisibleAction,
  FirstEntranceAction,
  MenuOpenAction,
  TopbarVisibleAction,
  LockTopbarAction,
} from "@custom-types/store"

const loaderVisible = (
  state: Store["loaderVisible"] = false,
  action: LoaderVisibleAction
): Store["loaderVisible"] => {
  switch (action.type) {
    case "loader-visible":
      return action.payload
    default:
      return state
  }
}

const firstEntrance = (
  state: Store["firstEntrance"] = true,
  action: FirstEntranceAction
): Store["firstEntrance"] => {
  switch (action.type) {
    case "first-entrance":
      return action.payload
    default:
      return state
  }
}

const menuOpen = (
  state: Store["menuOpen"] = false,
  action: MenuOpenAction
): Store["menuOpen"] => {
  switch (action.type) {
    case "menu-open":
      return action.payload
    default:
      return state
  }
}

const topbarVisible = (
  state: Store["topbarVisible"] = true,
  action: TopbarVisibleAction
): Store["topbarVisible"] => {
  switch (action.type) {
    case "topbar-visible":
      return action.payload
    default:
      return state
  }
}

const lockTopbar = (
  state: Store["topbarVisible"] = false,
  action: LockTopbarAction
): Store["lockTopbar"] => {
  switch (action.type) {
    case "lock-topbar":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers<Store>({
  loaderVisible,
  firstEntrance,
  menuOpen,
  topbarVisible,
  lockTopbar,
})

export default rootReducer
