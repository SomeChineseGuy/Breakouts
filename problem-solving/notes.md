## CheatSheet

### Ternary Operator

# Big

## Second

### Third

#### Forth

Short hand for if/else

```js
if (3 === 3) {
  console.log(true);
} else {
  console.log(false);
}

3 === 3 ? console.log(true) : console.log(false);
```

### Array .include()

Checks to see if value is in array, returns true or false

```js
const arr = [1, 2, 3];
arr.includes(3); // true
```

### Array .forEach

Loop over array and does something with it. Not to be confused with map, forEach doesn't craete a new array but only loops over it

```js
const numArr = [1, 2, 3];
numArr.forEach((num) => {
  console.log(num * 2);
});
// 2 , 4 , 6
```

### Array .map

Creates a new instance of an Array and you're able to do something with it. Not to be confused with forEach, map will create a new array

```js
const numArr = [1, 2, 3];
const newNumArr = numArr.map((num) => {
  return num * 2;
});
// newNumArr = [2, 4, 6];
```
