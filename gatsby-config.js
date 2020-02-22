const path = require("path")

const email = `hello@andy-hook.co.uk`

module.exports = {
  siteMetadata: {
    title: `Blocks | Explore the latest Ethereum blocks`,
    description: `The minimal way to explore Ethereum blocks inside your web browser.`,
    author: `@Andy_Hook`,
    email: email,
    defaultTwitterImage: `/images/social/twitter-preview.png`,
    defaultOgImage: `/images/social/og-preview.png`,
    social: {
      email: {
        label: "Email",
        url: `mailto:${email}`,
        icon: "mail",
      },
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/andyhooky/",
        icon: "instagram",
      },
      twitter: {
        label: "Twitter",
        url: "https://twitter.com/andy_hook",
        icon: "twitter",
      },
      dribbble: {
        label: "Dribbble",
        url: "https://dribbble.com/andyhook",
        icon: "dribbble",
      },
      github: {
        label: "Github",
        url: "https://github.com/andy-hook",
        icon: "github",
      },
      linkedin: {
        label: "Linkedin",
        url: "https://www.linkedin.com/in/andyahook",
        icon: "linkedin",
      },
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blocks.andyhook.dev`,
        short_name: `blocks`,
        start_url: `/`,
        background_color: `#171C1F`,
        theme_color: `#F55161`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    // Per route transition links
    // The persistent layout is defined here rather than being part of component composition in file
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.tsx`),
      },
    },

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@style": path.resolve(__dirname, "src/style"),
          "@data": path.resolve(__dirname, "src/data"),
          "@components": path.resolve(__dirname, "src/components"),
          "@custom-types": path.resolve(__dirname, "src/types"),
          "@svg": path.resolve(__dirname, "src/svg"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@utils": path.resolve(__dirname, "src/utils"),
          "@providers": path.resolve(__dirname, "src/providers"),
          "@web3": path.resolve(__dirname, "src/web3"),
        },
        extensions: [],
      },
    },

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-22526711-5",
      },
    },

    // Client only routing for block urls
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/block/*`] },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        globPatterns: ["**/*.{js,svg,html,css}"],
      },
    },

    // Temporarily disable service worker for local dev
    // `gatsby-plugin-remove-serviceworker`,

    // Netlify integration and redirects
    `gatsby-plugin-netlify`,
  ],
}
