# no-inplace-sort
Tiny Javascript module that replaces the `Array.prototype.sort` with an implementation that returns a new sorted array instead of modifying the input in place

```js
require('no-inplace-sort')´;

const a = [2, 3, 1, 4];
const b = a.sort();

console.log(a); // [2, 3, 1, 4]
console.log(b); // [1, 2, 3, 4]
```
