


// console.log(myName + ", how are you?");

// console.log(num - 5);



// console.log(sum(4, 6));

// // const num = 10;
// const num2 = sum(6, 4);

// console.log(num + 10);
// console.log(num2 + 10);

function sayMyName (myName) {
  return myName;
}

const myName = 'Alvin';

const myName2 = sayMyName('Alvin')

// console.log(myName + ", how are you?");
// console.log(myName2 + ", how are you?");

// 14 + (10 - 7) + 20

// function sum2(num, callback, num2) {
//   return num + callback() + num2
// }

// const newSum = sum2(10, function() {return 10 - 7}, 20)
// console.log(function() {return 10 - 7}());


// console.log(newSum);

function sum(num1, num2) {
  return num1 + num2
};

const num = sum(6, 4);
console.log(num);
const sum2 = sum;
const num2 = sum2(6, 4)
console.log(num2);

// 10 + (10 -6)



function minus(num1, num2) {
  return num1 - num2
}


// console.log(newSum(10, minus(10, 6)));
// console.log(newSum(10, minus, 20, 6));

// 
// const newNum2 = newSum(10, )

function newSum(num1, callback, innermins, innermins2) {
  return num1 + callback();
} 
function newSumNoCB(num1) {
  return num1 + minus(10, 6);
} 
const newNum1 = newSum(10, function() {
  return 10 - 6
});
console.log(newNum1);
const newNum2 = newSumNoCB(10)
const newNum3 = newSumNoCB(14)

const newNum4 = newSum(14, function() {
  return 100 * 100
})

console.log(newNum4);