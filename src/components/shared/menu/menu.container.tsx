import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { Store } from "@custom-types/store"
import { useStaticQuery, graphql } from "gatsby"
import { Dispatch } from "redux"
import { menuOpenAction } from "@store/actions"

interface DispatchProps {
  dispatchCloseMenuAction: () => void
}

interface StoreProps {
  menuOpen: Store["menuOpen"]
}

type AllProps = StoreProps & DispatchProps

const mapStateToProps = ({ menuOpen }: Store) => {
  return { menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchCloseMenuAction: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

const MenuContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen, dispatchCloseMenuAction }) => {
    const data = useStaticQuery(graphql`
      query {
        socialData: site {
          ...Social
        }
      }
    `)
    return (
      <Menu
        open={menuOpen}
        social={data.socialData.siteMetadata.social}
        dispatchCloseMenuAction={dispatchCloseMenuAction}
      />
    )
  }
)

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)

export default ConnectedMenu
