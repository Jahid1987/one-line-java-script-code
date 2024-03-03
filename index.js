// reversing String
const reverseString = (str) => str.split("").reverse().join("");

// console.log(reverseString("abc"));

// get the average of multiple numbers
const getAverage = (...arguments) =>
  arguments.reduce((a, b) => a + b, 0) / arguments.length;

// console.log(getAverage(3, 4, 5, 6));
const arrayOfNums = [3, 54, 5, 6, 7, 3];
// console.log(getAverage(...arrayOfNums));

// checking the number is even or odd?
const isEven = (num) => num % 2 === 0;
// console.log(isEven(81));

// remove duplicate elements from an array
const uniqueArray = (arr) => [...new Set(arr)];
// console.log(uniqueArray([2, 2, 3, 5, 6, 6, 6, 7, 39, 8]));

// Capitalize the first string of the string
const capitalizeFirstString = (str) =>
  str
    .split(" ")
    .map((element) => element[0]?.toUpperCase() + element.slice(1))
    .join(" ");

// console.log(capitalizeFirstString("anwer jahid sohel, ok r"));

// generate a random string of specified length

const generateRandomString = (length) =>
  [...Array(length)].map(() => Math.random().toString(36)[2]).join("");

// console.log(generateRandomString(5))
// console.log(generateRandomString(8))
// console.log(generateRandomString(12))

// generate random number between max and min number

const generateRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(generateRandomNumber(100, 50));
// Scroll to the top of the page
const goToTop = () => window.scrollTo(0, 0);
console.dir(window.scrollTo);

// Get the type of the variable
const typeOf = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

console.log(typeOf(33));

// Shuffle and array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
const numbers = [34, 2, 343, 2, 45, 3, 87];
console.log(shuffleArray(numbers));

// get the content every time selected by the user
const getSelectedText = () => window.getSelection().toString();
console.log(getSelectedText());
