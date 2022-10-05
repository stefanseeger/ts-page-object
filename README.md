# **ts-page-object**, **ngx-page-object** and **react-ts-page-object**

This repository is a mono repository which contains multiple page-object base projects

## What is a PageObject

The original idea of a **PageObject** dates back (as far as I know) to [Martin Fowler 2013](https://martinfowler.com/bliki/PageObject.html).

In short a **PageObject** should be a non HTML based functional API to the web application.

It is recommended to use one **PageObject** per component and page. That way you will gain maximum reuseability and encapsulation.

Examples for functions in **PageObject**s would be `clickContinue()`, `selectPassenger()`, `getPageTitle()`, `getAge()`

A function in a **PageObject** should **NEVER return HTMLElements**. Instead return `string`, `number`, `boolean`, `objects` or `arrays` (i know arrays are typeof objects in JS).
And if your component or page is containing sub-components you should definetly write a own **PageObject** for the sub component and let the parent return it.

## Why should I use ts-page-object or ngx-page-object

The **ts-page-object** and **ngx-page-object** are providing you with utility functions to quickly write nice **PageObjects**.

| Function               | Description                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| constructor            | creates the `PageObject` by the HTMLElement and when wanted with the selector                     |
| $                      | first `HTMLElement` for selector                                                                  |
| $$                     | all `HTMLElement`s for selector as array                                                          |
| normalizeText          | Replaces all whitespace characters with a space. Remove multiple consequtive spaces. Strips       |
| textContent            | textContent of first `HTMLElement`                                                                |
| normalizedTextContent  | normalized textContent of first `HTMLElement`                                                     |
| textContents           | array of textContent of all `HTMLElement`s                                                        |
| normalizedTextContents | array or normalized textContent of all `HTMLElement`s                                             |
| isDisplayed            | `true` when `HTMLElement` is in DOM                                                               |
| idDisabled             | `true` when `HTMLElement` has `disabled` `attribute`                                              |
| waitToAppear           | Resolves `Promise` when `HTMLElement` is in DOM. Waits 3 seconds per default before rejecting.    |
| waitToDisappear        | Resolved `Promise` when `HTMLElement` is not in DOM. Waits 3 seconds per default before rejecting |
| getFloat               | textContent as float number                                                                       |
| getInt                 | textContent as int number                                                                         |
| blur                   | send blur, input and change event to `HTMLElement`                                                |
| setValue               | sets value `attribute` of `HTMLInputElement`                                                      |
| getValue               | get value of value `attribute` of `HTMLInputElement`                                              |
| click                  | clicks `HTMLElement`                                                                              |
| isChecked              | `true` when `HTMLInputElement` has `checked` `attribute`                                          |
| isValid                | `true` when `attribute` `aria-invalid` is not existing                                            |
| keyUp                  | send `keyup` event with given key to HTMLInputElement                                             |

## How to use

Simply create a class which `extends PageObject` and implement the `getSelector` function that it returns the `HTMLElements` selector.

Check the demo applications in `packages/demo`

- [Angular](https://github.com/stefanseeger/ts-page-object/tree/main/libs/demo/angular)
- [React](https://github.com/stefanseeger/ts-page-object/tree/main/libs/demo/react)
