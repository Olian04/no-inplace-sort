# no-inplace-sort
A tiny Javascript module that changes `Array.prototype.sort` to return the sorted array without changing the input array.
Effectivly making the Array#sort method pure while retaining most of its performance.

```js
require('no-inplace-sort')´;

const a = [2, 3, 1, 4];
const b = a.sort();

console.log(a); // [2, 3, 1, 4]
console.log(b); // [1, 2, 3, 4]
```

The entire implementation is 5 lines long:
```js
Array.prototype.sort = (nativeInplaceSort => function(...args) {
  const arr = [...this]; // Shallow copy
  arr.sort = nativeInplaceSort; // Use native sort 
  return [...arr.sort(...args)]; // Remove native sort
})(Array.prototype.sort);
```

Fiddle demo: https://jsfiddle.net/szynrjcv/40/
