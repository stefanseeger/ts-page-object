# TsPageObjects mono repository

This is a `nx` based mono repository

## Published projects

The following projects are published to NPMJS.

### ts-page-object

Can be used for testing all typescript and HTMLElement based frameworks.

- [README](./packages/ts-page-object/README.md)
- [NPM Package](https://www.npmjs.com/package/ts-page-object)

### ngx-page-object

Can be used for testing specifically [Angular](https://angular.io/).

- [README](./packages/ngx-page-object/README.md)
- [NPM Package](https://www.npmjs.com/package/ngx-page-object)

## Demo projects

The following projects are used as showcase, examples and for automatic testing of the published projects.

### React

Contains a minimal example of how to use the **ts-page-object**

- [README](./packages/demo/react/README.md)

### Angular

Contains a minimal example of how to use the **ngx-page-object**

- [README](./packages/demo/angular/README.md)

## Development server

Run `nx serve my-app` for a dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
