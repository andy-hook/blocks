## Blocks

Blocks is a simple, minimal Ethereum blocks explorer designed to make the display of data visually appealing and fun to use. It's built on [Gatsby](https://www.gatsbyjs.org/), written in [Typescript](https://www.typescriptlang.org/) and styled with [Styled Components](https://styled-components.com/). Motion is handled by [React Spring](https://www.react-spring.io/) and tests run on [Jest](https://jestjs.io/).

### Prerequisites

You'll need to have the MetaMask extension installed and be logged in to view blocks, you can get it [here](https://metamask.io/).

### Demo

View it online
[https://blocks.andyhook.dev/](https://blocks.andyhook.dev/)

## Getting Started

Clone this repository and install the dependencies:

```sh
yarn
```

or

```sh
npm install
```

## Configuration

See configuration constants inside `src/config` to manage some aspects of data display.

## Developing

To start local development:

```sh
yarn start
```

This will spin up a local server on `localhost:8000`

## Building

To build for production:

```sh
yarn build
```

or preview a build locally on `localhost:9000`

```sh
yarn build-serve
```

## Testing

Run the tests:

```sh
yarn test
```

or run and watch:

```sh
yarn test-watch
```

## Type checking, linting and CI

Because React doesn't typecheck at runtime you'll have to run a check manually or in your pipeline to ensure all your code passes:

```sh
yarn type-check
```

You can also run a lint:

```sh
yarn lint
```

Or everything including formatting and tests:

```sh
yarn all-checks
```

## Formatting your code

Prettier is supported:

```sh
yarn format
```

Or install a plugin for your editor of choice, I personally use [this vscode package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Building icons

To optimise and update the spritesheet when you edit icons:

```sh
yarn build-icons
```

## Pre-loading fonts

Whenever you change font files, `@fontface` declarations or add new pages you will need to update the preload cache by performing the following steps:

### Start your development environment

```sh
yarn start
```

### Run the scraper to generate cache

```sh
yarn preload-fonts
```

You should now have an updated `font-preload-cache.json`, don't forget to check this in along with your font changes.

## License

MIT, see [LICENSE](LICENSE).
