## Convention

Throughout the project, unless otherwise mentioned, we will be using the following convention:

- folders and files are named in lowercase with words separated by hyphen (kebab-case). For example, `my-folder` or `my-file`.
- Functions -> `camelCase` E.g. _filterProductsByType_ , _formatCurrency_
- Variables -> `camelCase` E.g. _products_, _productsFiltered_
- Global constants -> all caps `UPPERCASE`. For example: `MAX_VALUE`, `MIN_VALUE`
- Object constants -> Singular, capitalized with const assertion and optionally satisfies type (if there is one).

```js
const ORDER_STATUS = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    error: 'error',
  } as const satisfies OrderStatus;
```

- component names -> `PascalCase` E.g. _export const Header = () => {}_
- types should have `.d.ts` extension. E.g. _root.d.ts_
- use arrow functions wherever possible.
- ui folder contains granular level components like _button_, _dialog_, _input_ etc which can be used to build other components.
- use given folders for various kinds of files. E.g. _types should reside in types folder_

For granular level convention, read the README in specific folder.

NOTE: Check specific folder README for overiding rules (if any). If there are cases where industry standards over-ride the rules mentioned above, please feel free to use them. For example convention for naming hooks.
