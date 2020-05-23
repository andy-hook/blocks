import React, { useState, useCallback, useMemo } from "react"
import { Web3BlockData } from "model"
import { toString } from "lodash"
import BlockHeader from "@components/shared/block-header/block-header"
import BlockBody from "@components/shared/block-body/block-body"
import { animated, useSpring } from "react-spring"

interface Props {
  blockData?: Web3BlockData | null
}

const Block: React.FunctionComponent<Props> = ({ blockData }) => {
  const [trxVisible, setTrxVisible] = useState<boolean>(false)
  const spring = { mass: 1, tension: 175, friction: 30 }
  const animateBlockEntrance = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,5rem,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0,0,0)`,
    },
    config: spring,
  })

  const handleDetailsClick = useCallback(() => {
    setTrxVisible(false)
  }, [])

  const handleTransactionsClick = useCallback(() => {
    setTrxVisible(true)
  }, [])

  const renderHeaderAsSkeletonOrPopulated = useMemo(() => {
    if (blockData) {
      return (
        <BlockHeader
          blockNumber={toString(blockData.number)}
          transactionCount={toString(blockData.transactionCount)}
          handleDetailsClick={handleDetailsClick}
          handleTransactionsClick={handleTransactionsClick}
          trxVisible={trxVisible}
        />
      )
    } else {
      return <BlockHeader trxVisible={trxVisible} loading={true} />
    }
  }, [blockData, trxVisible, handleDetailsClick, handleTransactionsClick])

  return (
    <animated.div style={animateBlockEntrance}>
      <article>
        {renderHeaderAsSkeletonOrPopulated}
        <main>
          <BlockBody trxVisible={trxVisible} blockData={blockData} />
        </main>
      </article>
    </animated.div>
  )
}

export default Block
