# Material Web Components

A Material Design 3 Web Components library built with Lit, TypeScript, and Tailwind CSS v4.

## Demo

[Storybook](https://michistraubel.github.io/material-web-components/)

## Documentation

See the [/prompt](./prompt/) folder for detailed documentation:

- [PROJECT_PROMPT.md](./prompt/PROJECT_PROMPT.md) - Architecture and project structure
- [COMPONENTS.md](./prompt/COMPONENTS.md) - Component API reference
- [COMMANDS.md](./prompt/COMMANDS.md) - Build and development commands

## Quick Start

```bash
# Install dependencies
yarn install

# Build CSS (required before dev)
yarn build:css

# Start Storybook
yarn workspace @material-wc/storybook dev
```

## Packages

- `@material-wc/core` - Base classes, theming, icons
- `@material-wc/buttons` - Buttons, FABs, Button Groups
