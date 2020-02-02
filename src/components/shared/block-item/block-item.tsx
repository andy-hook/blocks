import React from "react"
import { Web3BlockData } from "model"
import { Link } from "gatsby"

interface Props {
  blockNumber: Web3BlockData["number"]
  transactions: Web3BlockData["transactions"]
}

const BlockItem: React.FunctionComponent<Props> = ({ blockNumber }) => {
  return <Link to={`/blocks/${blockNumber}`}>Go to block {blockNumber}</Link>
}

export default BlockItem
