// 1. Create an array called numbers with values 1 through 5
const numbers =;

// 2. Write a for loop that prints each number in the array
console.log("--- Each number in the array ---");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 3. Write a while loop that counts down from 5 to 1
console.log("--- Countdown from 5 to 1 ---");
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

// 4. Create a loop that prints only even numbers from the numbers array
console.log("--- Even numbers only ---");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// 5. Create a loop that calculates the sum of all numbers in the array
console.log("--- Sum of all numbers ---");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Total sum:", sum);

