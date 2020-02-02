import { SocialMeta } from "@custom-types/model"
import { FluidObject } from "gatsby-image"
import { TransitionType } from "@custom-types/gatsby-plugin-transition-link"
import { TRANSITION_STATUS_ENTERING } from "@hooks/page-transition"

export const mockSocialIcons: SocialMeta = {
  email: {
    label: "Email",
    url: "email address",
    icon: "mail",
  },
  twitter: {
    label: "Twitter",
    url: "path/to/social/profile",
    icon: "twitter",
  },
  instagram: {
    label: "Instagram",
    url: "path/to/social/profile",
    icon: "instagram",
  },
  linkedin: {
    label: "Linkedin",
    url: "path/to/social/profile",
    icon: "linkedin",
  },
  dribbble: {
    label: "Dribbble",
    url: "path/to/social/profile",
    icon: "dribbble",
  },
  github: {
    label: "Github",
    url: "path/to/social/profile",
    icon: "github",
  },
}

export const mockFluidImageObject: FluidObject = {
  aspectRatio: 1.5,
  sizes: "(max-width: 1000px) 100vw, 1000px",
  src: "/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
  srcSet:
    "/static/4a7de89fcee5d7cd97c940895602fbe0/4d406/cover-image.jpg 250w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/32ee9/cover-image.jpg 500w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
}

export const createStateMock = (animType?: TransitionType) => {
  return {
    current: {
      delay: 0,
      length: 0,
      state: {},
    },
    entry: {
      delay: 0,
      length: 0,
      state: {
        animType,
      },
    },
    exit: {
      delay: 0,
      length: 0,
      state: {
        animType,
      },
    },
    transitionStatus: TRANSITION_STATUS_ENTERING,
    mount: false,
  }
}
