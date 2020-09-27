import React, { useEffect } from "react"

import SEO from "@components/seo"
import Page from "@components/page/page"
import { useLoadingStatusContext } from "@providers/loading-status-provider"
import { useSpring, animated } from "react-spring"
import Hero from "@components/hero/hero"
import Gutter from "@components/gutter/gutter"
import Limiter from "@components/limiter/limiter"
import BlockList from "@components/block-list/block-list"
import { useBlockData } from "@providers/block-data-provider"

interface Props {
  path: string
}

const IndexPage: React.FunctionComponent<Props> = () => {
  const [blockData] = useBlockData()
  const { setLoadingStatus } = useLoadingStatusContext()

  useEffect(() => {
    if (blockData) {
      setLoadingStatus(false)
    }
  }, [blockData, setLoadingStatus])

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
              <BlockList blockData={blockData} />
            </Limiter>
          </Gutter>
        </animated.div>
      </Page>
    </>
  )
}

export default IndexPage
