/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface Props {
  description?: string
  lang?: string
  bodyClasses?: string
  keywords?: string[]
  title?: string
  twitterImage?: string
  ogImage?: string
}

const SEO = ({
  description = ``,
  lang = `en`,
  bodyClasses = ``,
  keywords = [
    `User interface`,
    `Web developer`,
    `Front-end developer`,
    `Digital designer`,
    `Web designer`,
    `Brighton`,
  ],
  title,
  twitterImage = ``,
  ogImage = ``,
}: Props) => {
  const { metaData } = useStaticQuery(
    graphql`
      query {
        metaData: site {
          ...Meta
        }
      }
    `
  )

  const metaDescription = description || metaData.siteMetadata.description
  const metaTwitterImage =
    twitterImage || metaData.siteMetadata.defaultTwitterImage
  const metaOgImage = ogImage || metaData.siteMetadata.defaultOgImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: bodyClasses,
      }}
      title={title}
      defaultTitle={`${metaData.siteMetadata.title}`}
      titleTemplate={`%s | ${metaData.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaData.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image:src`,
          content: metaTwitterImage,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  )
}

export default SEO
