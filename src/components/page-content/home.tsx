import React, { memo } from "react"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import BlockList from "@components/shared/block-list/block-list"
import Page from "@components/shared/page/page"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"

const Home: React.FunctionComponent = memo(() => {
  const { data } = useWeb3BlocksDataContext()

  return (
    <Page>
      <Gutter>
        <Limiter>
          <BlockList blockData={data} />
        </Limiter>
      </Gutter>
    </Page>
  )
})

export default Home
