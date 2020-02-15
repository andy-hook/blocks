import React, { memo, useEffect } from "react"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import BlockList from "@components/shared/block-list/block-list"
import Page from "@components/shared/page/page"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"

const Home: React.FunctionComponent = memo(() => {
  const { data } = useWeb3BlocksDataContext()
  const { setLoadingStatus } = useLoadingStatusContext()

  useEffect(() => {
    if (data) {
      setLoadingStatus(false)
    }
  }, [data])

  return (
    <Page>
      <Gutter>
        <Limiter size="large">
          <BlockList blockData={data} />
        </Limiter>
      </Gutter>
    </Page>
  )
})

export default Home
