import React from "react"

import { storiesOf } from "@storybook/react"
import Icon from "./icon"

storiesOf("<Icon />", module).add("Icons", () => (
  <>
    <Icon name="github" />
    <Icon name="twitter" />
    <Icon name="instagram" />
    <Icon name="dribbble" />
    <Icon name="linkedin" />
  </>
))
