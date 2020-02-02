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
