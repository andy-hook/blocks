/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions

  // Redirect blocks to index
  createRedirect({
    fromPath: `/blocks`,
    toPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  createRedirect({
    fromPath: `/blocks/`,
    toPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
  })
}

// Work around issue with gatsby ssr failing because of web3 package
const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    plugins: [new webpack.IgnorePlugin(/^electron$/)],
  })
}
