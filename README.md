# Sdkpro01

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## TypeScript SDK

This repository now includes a standalone TypeScript SDK at `sdk/`.

Build the SDK:

```bash
npm run build:sdk
```

The SDK package outputs:

- `sdk/dist/esm` (ES modules)
- `sdk/dist/cjs` (CommonJS)
- `sdk/dist/types` (TypeScript declarations)

## SDK versioning and publish workflow

1. Login to npm:

```bash
npm login
```

2. Publish from project root:

```bash
npm run sdk:release:patch
```

or

```bash
npm run sdk:release:minor
npm run sdk:release:major
```

3. CI publish is also configured in `.github/workflows/publish-sdk.yml`.

- Add repository secret: `NPM_TOKEN`
- Push tag format: `sdk-v1.2.3`
- Workflow builds `sdk/` and runs `npm publish`

## How other apps use the SDK

- Web app: install and import directly from npm.
- React Native: install and import directly from npm.
- Kotlin/Swift/Flutter: this TypeScript SDK is not directly importable in native runtimes; use platform-specific clients generated from a shared API contract, or expose this SDK through a JS bridge layer.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
