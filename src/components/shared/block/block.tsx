import React, { useState, memo } from "react"
import { Web3BlockData } from "model"
import { toString } from "lodash"
import styled from "styled-components"
import BlockHeader from "@components/shared/block-header/block-header"
import BlockBody from "@components/shared/block-body/block-body"

interface Props {
  blockData?: Web3BlockData | null
}

const Block: React.FunctionComponent<Props> = ({ blockData }) => {
  const [trxVisible, setTrxVisible] = useState<boolean>(false)

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
  }

  return (
    <Container>
      {renderHeaderAsSkeletonOrPopulated()}
      <BlockBody trxVisible={trxVisible} blockData={blockData} />
    </Container>
  )
}

const Container = styled.article``

export default memo(Block)
