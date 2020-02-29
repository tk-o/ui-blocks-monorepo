# ui-blocks-monorepo
Project with Next.js as rendering worker, storybook and UI block components as independent packages

## Installation
```
yarn
```

## Development

```
yarn start
```

## Know issues
Because standalone blocks rely on core blocks, and both of these groups are built in parallel, there's a race condition.