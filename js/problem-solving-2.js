// Problem 2: The function in the first problem should now receive 2 arrays of temperataure

// 1. Understand the problem
// - With 2 ararys, should we implement the same functionality twice?
// No, just merge the two arrays into one

// 2. Break it down
// - Merge 2 arrays?

console.log();

const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2); // Merge the 2 arrays

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currTemp = temps[i];

    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  return max - min;
};

const amplitude = calcTempAmplitudeNew([-1, 2, 3, 4], [5, 13, 6, 4]);
console.log('New amplitude:', amplitude);
