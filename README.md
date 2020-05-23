# es-mitt

Fork of https://github.com/developit/mitt, but using the npm name: `es-mitt`

<a href="https://www.npmjs.org/package/es-mitt"><img src="https://img.shields.io/npm/v/es-mitt.svg?style=flat" alt="npm"></a>

### Why?

[EventEmitter](https://nodejs.org/api/events.html) of **nodejs** is heavy, both in size and API, this lib want keep as light as possible.

### Install

```sh
npm i -S es-mitt
```

### Different from mitt

- use `typescript` instead of `flow`, as `src/index.ts`
- `main` file point to `dist/index.js` as node module
- using `class` and keep other `es2015` features
