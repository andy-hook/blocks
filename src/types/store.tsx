export interface PayloadedAction<Type, Payload> {
  type: Type
  payload: Payload
}

export interface Action<Type> {
  type: Type
}

export interface Store {
  loaderVisible: boolean
  firstEntrance: boolean
  menuOpen: boolean
  topbarVisible: boolean
  lockTopbar: boolean
}

export interface LoaderVisibleAction
  extends PayloadedAction<"loader-visible", boolean> {}

export interface FirstEntranceAction
  extends PayloadedAction<"first-entrance", boolean> {}

export interface MenuOpenAction extends PayloadedAction<"menu-open", boolean> {}

export interface TopbarVisibleAction
  extends PayloadedAction<"topbar-visible", boolean> {}

export interface LockTopbarAction
  extends PayloadedAction<"lock-topbar", boolean> {}
