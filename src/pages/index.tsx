import React, { useEffect } from "react"

import SEO from "@components/seo"
import Page from "@components/page/page"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"
import { useSpring, animated } from "react-spring"
import Hero from "@components/hero/hero"
import Gutter from "@components/gutter/gutter"
import Limiter from "@components/limiter/limiter"
import BlockList from "@components/block-list/block-list"

interface Props {
  path: string
}

const IndexPage: React.FunctionComponent<Props> = () => {
  const { data } = useWeb3BlocksDataContext()
  const { setLoadingStatus } = useLoadingStatusContext()

  useEffect(() => {
    if (data) {
      setLoadingStatus(false)
    }
  }, [data, setLoadingStatus])

  const spring = { mass: 1, tension: 175, friction: 30 }
  const animateHomeEntrance = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,5rem,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0rem,0,0)`,
    },
    config: spring,
  })

  return (
    <>
      <SEO />
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
    </>
  )
}

export default IndexPage
