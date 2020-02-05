import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { Store } from "@custom-types/store"
import { useStaticQuery, graphql } from "gatsby"
import { Dispatch } from "redux"
import { menuOpenAction } from "@store/actions"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"

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
    const { data } = useWeb3BlocksDataContext()

    const graphData = useStaticQuery(graphql`
      query {
        socialData: site {
          ...Social
        }
      }
    `)
    return (
      <Menu
        open={menuOpen}
        blockData={data}
        social={graphData.socialData.siteMetadata.social}
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
