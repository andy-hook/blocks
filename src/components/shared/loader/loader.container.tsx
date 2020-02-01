import React, { useState, memo } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "@custom-types/store"

import Loader from "./loader"
import { loaderVisibleAction, firstEntranceAction } from "@store/actions"

interface DispatchProps {
  hideLoader: () => void
  hasEnteredSite: () => void
}

type AllProps = Partial<Store> & DispatchProps

const mapStateToProps = ({ loaderVisible }: Store) => {
  return { loaderVisible }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    hideLoader: () => {
      dispatch(loaderVisibleAction(false))
    },
    hasEnteredSite: () => {
      dispatch(firstEntranceAction(false))
    },
  }
}

const LoaderContainer: React.FunctionComponent<AllProps> = memo(
  ({ hideLoader, loaderVisible, hasEnteredSite }) => {
    const [shouldRenderLoader, setRender] = useState(true)

    const onLeaveComplete = () => {
      hasEnteredSite()
      setRender(false)
    }

    const onEnterComplete = () => {
      setTimeout(() => {
        hideLoader()
      }, 200)
    }

    const renderLoader = () => {
      if (shouldRenderLoader) {
        return (
          <Loader
            visible={loaderVisible}
            onEnterComplete={onEnterComplete}
            onLeaveComplete={onLeaveComplete}
          />
        )
      }
    }

    return <>{renderLoader()}</>
  }
)

const ConnectedLoaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderContainer)

export default ConnectedLoaderContainer
