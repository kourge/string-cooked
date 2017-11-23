# `string-cooked`

In ECMAScript 6, a
[template tag function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
called `t` is any function that matches the signature `(parts, ...subs)`, and
can be used in this manner:

```ts
const s = t`interpolated string here`;
```

In many scenarios, you may want to use this as a way to simplify a function
call, e.g.:

```ts
const s = t(`interpolated string here`);
```

To do so, we need some function `f` that interpolates a template string with the
same behavior as an untagged template literal, a purpose not satisfied by the
built-in function `String.raw`. This module, `string-cooked`, is a function that
serves the aforementioned purpose.

## Installation

`string-cooked` is
[available on npm](https://www.npmjs.com/package/string-cooked):

```
npm install string-cooked
```

## Behavior

The function mimics two default behaviors.

### Escape sequences interpretation

```js
import cooked from 'string-cooked';

'\n'.length === 1;
`\n`.length === 1;
String.raw`\n`.length === 2;
cooked`\n`.length === 1;
```

### Interpolation

```js
import cooked from 'string-cooked';

const [a, b] = [1, 2];

const manual = a + ',' + b;
`${a},${b}` === manual;
String.raw`${a},${b}` === manual;
cooked`${a},${b}` === manual;
```

## Examples

Making an `html` tag function using [jsdom](https://github.com/tmpvar/jsdom):

```js
import cooked from 'string-cooked';
import {JSDOM} from 'jsdom';

export function html(strings, ...subs) {
  return new JSDOM(cooked(strings, ...subs));
}

// usage:
const dom = html`<!DOCTYPE html><body><p>hello</p></body>`;
```

Making an `md` tag function using
[markdown-js](https://github.com/evilstreak/markdown-js):

```js
import cooked from 'string-cooked';
import {markdown} from 'markdown';

export function md(strings, ...subs) {
  return markdown.toHTML(cooked(strings, ...subs));
}

// usage:
const fragment = md`
  # Heading

  * Bullet 1
  * Bullet 2

`;
```
