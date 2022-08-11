# Demo React

This project is a demonstration on how to use the [**ts-page-object**](../../ts-page-object/README.md) and also serves as automatic test for it.

## PageObjects

You can find example implementations of PageObjects here:

- [app.po.ts](./src/app/app.po.ts) - PageObject of App component
  - has a function `getWelcome` to return the PageObject of the child component
- [welcome.po.ts](./src/app/welcome.po.ts) - PageObject of Welcome component

## Run tests

`npx nx run demo-react:test`
