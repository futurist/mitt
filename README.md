# es-mitt

Fork of https://github.com/developit/mitt, but using the npm name: `es-mitt`

<a href="https://www.npmjs.org/package/es-mitt"><img src="https://img.shields.io/npm/v/es-mitt.svg?style=flat" alt="npm"></a>

### Install

```sh
npm i -S es-mitt
```

### Different from mitt

- use `typescript` instead of `flow`, as `src/index.ts`
- `main` file point to `src/index.js` as node module
- using `class` and keep other `es2015` features
- add `removeListener` method to keep consistency with [EventEmitter](https://nodejs.org/api/events.html)
