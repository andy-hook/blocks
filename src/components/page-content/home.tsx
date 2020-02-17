import React, { memo, useEffect } from "react"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import BlockList from "@components/shared/block-list/block-list"
import Page from "@components/shared/page/page"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"
import Hero from "@components/shared/hero/hero"
import { useSpring, animated } from "react-spring"

const Home: React.FunctionComponent = memo(() => {
  const { data } = useWeb3BlocksDataContext()
  const { setLoadingStatus } = useLoadingStatusContext()

  useEffect(() => {
    if (data) {
      setLoadingStatus(false)
    }
  }, [data])

  const animateHomeEntrance = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,5rem,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0rem,0,0)`,
    },
    config: { mass: 1, tension: 175, friction: 30 },
  })

  return (
    <Page>
      <animated.div style={animateHomeEntrance}>
        <Hero />
        <Gutter>
          <Limiter size="large">
            <BlockList blockData={data} />
          </Limiter>
        </Gutter>
      </animated.div>
    </Page>
  )
})

export default Home
