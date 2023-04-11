// Problem:
// We work for a company building smarthome theromometers.
// Our most recent task is:
// Given an array of temperatures of a day, calculate the temperature amplitude.
// (Keep in mind that sometimes there may be sensor errors).

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understand the problem
// 1. What is temperature amplitue?
// - It's the difference between the highest and the lowest temperatures (the value to be returned)
// 2. How do we compute minimum and maximum temperatures?
// 3. What's a sensor error? What do we do when we encounter them?
// - In the array, it is 'error', here we ignore

// Break it up into sub-problems
// 1. How do we ignore an error?
// 2. Find max value in temp array
// 3. Find min value in temp array
// 4. Subtract min from max (i.e. amplitue and return it)

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  // Maximum and minimum values
  for (let i = 0; i < temps.length; i++) {
    let currTemp = temps[i];
    if (typeof currTemp !== 'number') continue; // Ignore error
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log('Temperature amplitude:', amplitude);
