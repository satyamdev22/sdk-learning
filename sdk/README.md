# @satyamnpmdev/typescript-sdk

A standalone TypeScript SDK extracted from `sdkpro01`.

## Versioning and publishing

- Follow Semantic Versioning (`MAJOR.MINOR.PATCH`).
- Patch release: backward-compatible bug fix.
- Minor release: backward-compatible feature.
- Major release: breaking API change.

Manual release commands:

```bash
npm run release:patch
npm run release:minor
npm run release:major
```

Each command updates the version in `sdk/package.json`, creates a git tag, builds, and publishes to npm.

## Build

```bash
npm run build
```

Artifacts are generated into:

- `dist/esm`
- `dist/cjs`
- `dist/types`

## Usage

```ts
import { SdkPro01Client } from "@satyamnpmdev/typescript-sdk";

const sdk = new SdkPro01Client({
  baseUrl: "https://api.example.com",
  apiKey: "YOUR_API_KEY"
});

const sum = sdk.add(2, 3);
const health = await sdk.health();
```

## Consumer integration

### Web app (TypeScript/JavaScript)

```bash
npm install @satyamnpmdev/typescript-sdk
```

```ts
import { SdkPro01Client } from "@satyamnpmdev/typescript-sdk";
```

### React Native

React Native can use the SDK directly:

```bash
npm install @satyamnpmdev/typescript-sdk
```

Then import exactly like web apps.

### Flutter, Kotlin, Swift

This package is TypeScript, so native mobile apps cannot import it directly.
Use one of these integration patterns:

1. Wrap the SDK in a React Native module and expose native bridge calls.
2. Keep this SDK for web/React Native and implement Kotlin/Swift SDKs from the same API contract.
3. Share API contract (OpenAPI/JSON schema) and generate platform-specific clients.

