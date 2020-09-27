import React, { useState } from "react"
import BlockHeader from "@components/block-header/block-header"
import BlockBody from "@components/block-body/block-body"
import { animated, useSpring } from "react-spring"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"

interface Props {
  blockData?: BlockWithTransactions | null
}

const Block: React.FunctionComponent<Props> = ({ blockData }) => {
  const [trxVisible, setTrxVisible] = useState<boolean>(false)
  const animateBlockEntrance = useSpring({
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

  function handleDetailsClick() {
    setTrxVisible(false)
  }

  function handleTransactionsClick() {
    setTrxVisible(true)
  }

  function renderHeaderAsSkeletonOrPopulated() {
    if (blockData) {
      return (
        <BlockHeader
          blockNumber={`${blockData.number}`}
          transactionCount={`${blockData.transactions.length}`}
          handleDetailsClick={handleDetailsClick}
          handleTransactionsClick={handleTransactionsClick}
          trxVisible={trxVisible}
        />
      )
    } else {
      return <BlockHeader trxVisible={trxVisible} loading={true} />
    }
  }

  return (
    <animated.div style={animateBlockEntrance}>
      <article>
        {renderHeaderAsSkeletonOrPopulated()}
        <main>
          <BlockBody trxVisible={trxVisible} blockData={blockData} />
        </main>
      </article>
    </animated.div>
  )
}

export default Block
