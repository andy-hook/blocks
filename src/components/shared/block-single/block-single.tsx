import React from "react"
import { Web3BlockData } from "model"
import { toString } from "lodash"
import styled from "styled-components"
import BlockSingleHeader from "./block-single-header/block-single-header"
import BlockSingleBody from "./block-single-body/block-single-body"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockSingle: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderHeaderAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <BlockSingleHeader
          blockNumber={toString(blockData.number)}
          transactionCount={toString(blockData.transactionCount)}
        />
      )
    } else {
      return <BlockSingleHeader loading={true} />
    }
  }

  return (
    <Container>
      {renderHeaderAsSkeletonOrPopulated()}
      <BlockSingleBody blockData={blockData} />
    </Container>
  )
}

const Container = styled.article``

export default BlockSingle
