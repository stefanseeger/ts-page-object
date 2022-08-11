# Demo Angular

This project is a demonstration on how to use the [**ngx-page-object**](../../ngx-page-object/README.md) and also serves as automatic test for it.

## PageObjects

You can find example implementations of PageObjects here:

- [app.component.po.ts](./src/app/app.component.po.ts) - PageObject of App component
  - has a function `getWelcome` to return the PageObject of the child component
- [welcome.component.po.ts](./src/app/welcome.component.po.ts) - PageObject of Welcome component

## Run tests

`npx nx run demo-angular:test`
