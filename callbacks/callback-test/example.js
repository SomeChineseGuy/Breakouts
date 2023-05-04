function sum(num1, num2) {
  return num1 + num2
}

const four = sum(2, 2);
// console.log(four);

function largeSum(num1, callback) {
  // return num1 + sum(10, 10)
  return num1 + callback()
}

const six = largeSum(3, function() {
  return 6 - 3
})

// console.log(six);
const ten = largeSum(4, function() {
  return 10 - 4
})

const arrNum = [5, 6, 9];

function arrPlus(arr, callback) {
  for(let i = 0; i < arr.length; i++ ) {
    // all the numbers + 7
    console.log(arr[i] + callback());
  }
}

const results = arrPlus(arrNum, function() {
  return 20 + 100
})

console.log(results);
