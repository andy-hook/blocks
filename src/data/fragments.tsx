import { graphql } from "gatsby"

export const Social = graphql`
  fragment Social on Site {
    siteMetadata {
      social {
        twitter {
          url
          label
          icon
        }
        instagram {
          url
          label
          icon
        }
        dribbble {
          url
          label
          icon
        }
        github {
          url
          label
          icon
        }
        linkedin {
          url
          label
          icon
        }
      }
    }
  }
`

export const Meta = graphql`
  fragment Meta on Site {
    siteMetadata {
      title
      description
      author
      defaultTwitterImage
      defaultOgImage
    }
  }
`
