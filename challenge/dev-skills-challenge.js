// 1. Understanding the problem
// - Array transformed into string seperted by ...
// - What is the x days? Ans: current index+1

// 2. Breaking up into sub-problems
// - Transform array into strings
// - Transform each element to string with oC
// - String needs to contain current day
// - Add ... between elements, at the start and at the end of strings
// - Log string to console

const tmpsArr1 = [17, 21, 23];
const tmpsArr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // Build string
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}-C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(arr1);
printForecast(arr2);
