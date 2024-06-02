# Re Channel

## Install Dependencies

```shell
npm ci
```

## Start Development Server

```shell
npm dev
```

## Development

### Add New Features

```shell
src/features/<featureName>
├── <FeatureNameComponent>
│   ├── <FeatureNameComponent>.tsx
│   └── index.ts
├── actions.ts
├── data.ts
├── saga.ts
└── slice.ts
```

### Add New Models

```shell
src/models/<modelName>
├── <ModelNameComponent>
│   ├── <ModelNameComponent>.tsx
│   └── index.ts
└── data.ts
```
