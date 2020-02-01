import { createPayloadedAction } from "./action-helpers"
import {
  LoaderVisibleAction,
  FirstEntranceAction,
  MenuOpenAction,
  TopbarVisibleAction,
  LockTopbarAction,
} from "@custom-types/store"

export const loaderVisibleAction = createPayloadedAction<LoaderVisibleAction>(
  "loader-visible"
)

export const firstEntranceAction = createPayloadedAction<FirstEntranceAction>(
  "first-entrance"
)

export const menuOpenAction = createPayloadedAction<MenuOpenAction>("menu-open")

export const topbarVisibleAction = createPayloadedAction<TopbarVisibleAction>(
  "topbar-visible"
)

export const lockTopbarAction = createPayloadedAction<LockTopbarAction>(
  "lock-topbar"
)
