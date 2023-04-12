const calcTempAmplitudeDebug = function (temps1, temps2) {
  const temps = temps1.concat(temps2); // Merge the 2 arrays

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    debugger;
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  return max - min;
};

const amplitude = calcTempAmplitudeDebug([2, 3, 4], [5, 13, 6, 4]);
console.log('Debug amplitude:', amplitude);
